import { expect, type Locator, type Page } from '@playwright/test';
const softExpect = expect.configure({ soft: true });
let jsonPath = require('jsonpath');

export class ComparePage {

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
}