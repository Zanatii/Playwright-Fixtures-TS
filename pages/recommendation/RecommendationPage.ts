import { expect, type Locator, type Page } from '@playwright/test';
const softExpect = expect.configure({ soft: true });
let jsonPath = require('jsonpath');

export class RecommendationPage {

    protected page: Page;
    protected nextButton!: Locator;
    protected backButton!: Locator;
    protected compareButton!: Locator;
    protected tabButton!: Locator;
    protected tabTitle!: Locator;
    protected planTitle!: Locator;
    protected planName!: Locator;
    protected discount!: Locator;
    protected plan5GIcon!: Locator;
    protected plan5GIconURL!: Locator;
    protected discountedPrice!: Locator;
    protected priceTerm!: Locator;
    protected planPriceBefore3Months!: Locator;
    protected planPriceAfter3Months!: Locator;
    protected planFeatureTitle!: (index: number) => Locator;
    protected planFeatureDescription!: (index: number) => Locator;
    protected planFeatureAccordion!: (index: number) => Locator;
    protected planFeatureIcon!: (index: number) => Locator;
    protected allAccordions!: Locator;
    protected recommendationsApiResponse: any;


    /////////// Order Summary





    constructor(page: Page) {
        this.page = page;

    }


    // Actions

    async clickNextButton() {
        await this.nextButton.click();
    }

    async clickBackButton() {
        await this.backButton.click();
    }

    async clickCompareButton() {
        await this.compareButton.click();
    }

    async selectTab() {
        await this.tabButton.click();
    }

    async clickNextAndGetQueryProductAPIResponse() {
        const responsePromise = this.page.waitForResponse(/queryProductRecommendation/);
        await this.nextButton.click();
        const recommendationsResponse = await responsePromise;
        this.recommendationsApiResponse = await recommendationsResponse.json();
    }

    async getPlanPriceAsInt(locator: any) {
        const element = await locator;
        const elementText = await element.textContent();
        // returning plain price to compare it with that one returened from the API as int
        if (elementText != null) {
            return parseFloat(await elementText.replaceAll('S/ ', '').replaceAll('/mes', ''));
        }
        return -1; //.replace('.', '');
    }

    async getPlanRecurringPriceAsInt(locator: Locator) {
        const element = locator;
        const elementText: any = await element.textContent();
        // returning plain price to compare it with that one returened from the API as int
        if (elementText != null) {
            return parseFloat(await elementText.replaceAll('Por 3 meses luego S/ ', '').replaceAll('/mes', ''));
        }
        return -1; //.replace('.', '');
    }

    async getDiscountAsInt(locator: Locator) {
        const element = await locator;
        const elementText: any = await element.textContent();
        // returning plain price to compare it with that one returened from the API as int
        if (elementText != null) {
            return parseInt(elementText.replaceAll('% dcto.', '')); //.replace('.', '');
        }
        return -1;
    }

    async getDiscountCalculated(discountedPriceLocator: Locator, originalPriceLocator: Locator) {
        const element = await discountedPriceLocator;
        const secondElement = await originalPriceLocator;
        const discountedPrice = await this.getPlanPriceAsInt(element);
        const originalPrice = await this.getPlanRecurringPriceAsInt(secondElement);
        return (100 - (((discountedPrice / originalPrice) * 100)));
    }



    ///////////// Validations

    async validateTabTitle(firstTabTitle: string) {
        await softExpect(this.tabTitle, "The Tab title is valid").toHaveText(firstTabTitle);
    }

    async validatePlanTitle(planTitle: string) {
        await softExpect(this.planTitle, "The plan title is valid").toHaveText(planTitle);
    }

    async validatePlanName(planName: string) {
        await softExpect(this.planName, "The plan name is valid").toHaveText(planName);
    }

    async validateTheTabIsSelected() {
        await softExpect(this.tabButton, "The correct tab is selected").toHaveAttribute("aria-selected", "true");
    }

    async validateThe5GIconIsDisplayed(imgSource: string) {
        const regex = new RegExp(`^h.+com${imgSource}`);
        await softExpect(this.plan5GIconURL, ("5G Icon Image Source is valid")).toHaveAttribute("src", regex);
        //await softExpect(this.plan5GIcon, "5G Icon is Displayed").toBeVisible();
    }

    async validateCommercePriceFormat() {
        await softExpect(this.planPriceBefore3Months, "Plan Discounted Price format is displayed Correctly").toHaveText(/S\/ \d+\.\d+\/mes/);
    }

    async validateRecurringPriceFormat() {
        await softExpect(this.planPriceAfter3Months, "Plan Price format after 3 months is displayed Correctly").toHaveText(/Por 3 meses luego S\/ \d+\.\d+\/mes/);
    }

    async validateDiscountFormat() {
        await softExpect(this.discount, "Discount format is displayed Correctly").toHaveText(/\d+\% dcto\./);
    }

    async validateDiscountTagIsHidden(){
        await softExpect(this.discount, "Discount tag is hidden").toHaveCount(0);
    }

    async validateDiscountedPriceIsHidden(){
        await softExpect(this.planPriceAfter3Months, "Discounted price is hidden").toHaveCount(0);
    }

    async validateRecurringPriceIsDisplayedAsMain(planName: string){ //             `$[?(@.)].recommendationItem[0].product.productPrice[0].price.taxIncludedAmount.value
        const apiValue = await jsonPath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productPrice[?(@.priceType == 'recurring')].price.taxIncludedAmount.value`)[0];
        softExpect(await this.getPlanPriceAsInt(this.discountedPrice), "Recurring price is displayed as main price").toEqual(apiValue);
    }

    async validateFeatureIconSourceURL(featureIndex: number, iconImgSource: string) {
        const regex = new RegExp(`^h.+com${iconImgSource}`);
        await softExpect(this.planFeatureIcon(featureIndex), "Feature Icon URL source is valid").toHaveAttribute("src", regex);
    }

    async validateNumberOfAccordians(numberOfAccordians: number) {
        await softExpect(this.allAccordions, "Number of displayed Accordions is valid").toHaveCount(numberOfAccordians);
    }

    async validatePlanNameMapping(planName: string) {
        const apiValue = await jsonPath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.description`)[0];
        await softExpect(this.planName, "Plan name mapping is correct").toHaveText(apiValue);
    }

    async validatePlanFeatureTitleMapping(planName: string, featureIndex: number, characteristicName: string) {
        const apiValue = await jsonPath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productCharacteristic[?(@.name == '${characteristicName}')].title`)[0];
        await softExpect(this.planFeatureTitle(featureIndex), "Plan feature title mapping is correct").toHaveText(apiValue);
    }

    async validatePlanFeatureDescriptionMapping(planName: string, featureIndex: number, characteristicName: string) {
        const apiValue = await jsonPath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productCharacteristic[?(@.name == '${characteristicName}')].description`)[0];
        await softExpect(this.planFeatureDescription(featureIndex), "Plan feature description mapping is correct").toHaveText(apiValue);
    }

    async validateThePlanApiData(planName: string, planData: any) {
        const productObject = await jsonPath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product`)[0];
        await softExpect(productObject).toMatchObject(planData);
    }

    async validateTheDiscountTagCalculation() {
        const discountAmount = await this.getDiscountCalculated(this.discountedPrice, this.planPriceAfter3Months);
        softExpect(await this.getDiscountAsInt(this.discount), "Discount Amount is calculated correctly").toEqual(discountAmount);
    }

    async validateTheCommercePriceMapping(planName: string) {
        const apiValue = await jsonPath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productPrice[?(@.priceType == 'commerce')].price.taxIncludedAmount.value`)[0];
        softExpect(await this.getPlanPriceAsInt(this.discountedPrice), "The Commerce Price Mapping is correct").toEqual(apiValue)
    }

    async validateTheRecurringPriceMapping(planName: string) {
        const apiValue = await jsonPath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productPrice[?(@.priceType == 'recurring')].price.taxIncludedAmount.value`)[0];
        softExpect(await this.getPlanRecurringPriceAsInt(this.planPriceAfter3Months), "The Recurring Price Mapping is correct").toEqual(apiValue);
    }

}