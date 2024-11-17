import { expect, type Locator, type Page } from '@playwright/test';
const softExpect = expect.configure({ soft: true });
import { RecommendationPage } from './RecommendationPage';


export class OrderSummary extends RecommendationPage{

    protected page: Page;
    protected orderSummaryTitle!: any;
    protected orderSummaryProductsTitle!: Locator;              
    protected orderSummaryPlanTitle!: Locator;
    protected orderSummaryPlanName!: Locator;
    protected orderSummaryOriginalPrice!: Locator;
    protected orderSummaryPriceBefore3Months!: Locator;
    protected orderSummaryDiscountedPrice!: Locator;
    protected orderSummaryPriceTerm!: Locator;
    protected orderSummaryTotalPrice!: Locator;
    protected orderSummaryTotalPriceBefore3Months!: Locator;
    protected orderSummaryTotalDiscountedPrice!: Locator;
    protected orderSummaryTotalPriceTerm!: Locator;

    constructor (page: Page){
        super(page)
        this.page = page;
    }



    async getPlainPriceAsString(locator: any)
    {
         const element = await locator;
         let elementText = await element.textContent();
         // returning plain price to compare it with that one returened from the API as int
        return (elementText.replaceAll('$', '').replaceAll('.', '')); //.replace('.', '');
    }


    async getTotalDiscountedPrice(discountedPriceLocator: any, discounted2ndPriceLocator: any)
    {
        const element = await discountedPriceLocator;
        const secondElement = await discounted2ndPriceLocator;
        const elementText = await element.textContent();
        const secondelementText = await secondElement.textContent();
        const discountedPrice = this.getPlanPriceAsInt(elementText);
        const secondDiscountedPrice = this.getPlanPriceAsInt(secondelementText);
        return (await discountedPrice + await secondDiscountedPrice);
    }

    async getTotalOriginalPrice(originalPriceLocator: any, original2ndPriceLocator: any)
    {
        const element = await originalPriceLocator;
        const secondElement = await original2ndPriceLocator;
        const elementText = await element.textContent();
        const secondelementText = await secondElement.textContent();
        const originalPrice = this.getPlanRecurringPriceAsInt(elementText);
        const secondOriginalPrice = this.getPlanRecurringPriceAsInt(secondelementText);
        return (await originalPrice + await secondOriginalPrice);
    }


    async validateOrderSummaryTitle(title)
    {
        await softExpect(this.orderSummaryTitle, "Order Summary title is correct").toHaveText(title);
    }

    async validateOrderProductsColumnTitle(title)
    {
        await softExpect(this.productsColumnTitle, "Order Summary Products Column title is correct").toHaveText(title);
    }

    async validateOrderSummaryPlansTitle(title)
    {
        await softExpect(this.orderSummaryPlanTitle, "Order Summary Plans title is correct").toHaveText(title);
    }

    async validateOrderSummaryPricesColumnTitle(title)
    {
        await softExpect(this.pricesColumnTitle, "Order Summary Prices Column title is correct").toHaveText(title);
    }

    async validateOrderSummaryPlanName(name)
    {
        await softExpect(this.orderSummaryPlanName, "Order Summary Plan name is correct").toHaveText(name);
    }

    async validateOrderSummaryAdditionalPlanName(name)
    {
        await softExpect(this.orderSummaryAdditionalName, "Order Summary additional Plan name is correct").toHaveText(name);
    }

    async validateOrderSummaryAdditionalNameIsNotDisplayed()
    {
        await softExpect(this.orderSummaryAdditionalName, "Order Summary additional Plan name is not displayed").toHaveCount(0);
    }

    async validateOrderSummaryTotalNumberOfPlans(number)
    {
        await softExpect(this.orderSummaryNumberOfPlans, "Order Summary Total number if plans is correct").toHaveText(number);
    }

    async validateOrderSummaryCommercePriceFormat(planDiscountedPrice)
    {
        await softExpect(this.orderSummaryPriceBefore6Months, "Order Summary Plan Discounted Price is displayed Correctly").toHaveText(planDiscountedPrice);
    }

    async validateOrderSummaryRecurringPriceFormat(planPrice)
    {
        await softExpect(this.orderSummaryOriginalPrice, "Order Summary Plan Plan after 6 months is displayed Correctly").toHaveText(planPrice);
    }

    async validateOrderSummaryAdditionalCommercePrice(additionalDiscountedPrice)
    {
        await softExpect(this.orderSummaryAdditionalDiscountedPrice, "Order Summary Commerce Additional Plan Price is displayed Correctly").toHaveText(additionalDiscountedPrice);
    }

    async validateOrderSummaryAdditionalListPrice(additionalListPrice)
    {
        await softExpect(this.orderSummaryAdditionalPrice, ("Order Summary List Additional Plan Price is displayed Correctly")).toHaveText(additionalListPrice);
    }

    async validateOrderSummaryCommercePriceMapping(planName)
    {
        const apiValue = await jsonpath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productPrice[?(@.priceType == 'commerce')].price.taxIncludedAmount.value`)[0];
        softExpect(await this.getPlainPriceAsInt(this.orderSummaryDiscountedPrice), "The Order summary Plan Commerce Price Mapping is correct").toEqual(apiValue)
    }

    async validateOrderSummaryRecurringPriceMapping(planName)
    {
        const apiValue = await jsonpath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productPrice[?(@.priceType == 'recurring')].price.taxIncludedAmount.value`)[0];
        softExpect(await this.getPlainRecurringPriceAsInt(this.orderSummaryOriginalPrice), "The Order Summary Plan Recurring Price Mapping is correct").toEqual(apiValue);
    }

    async validateOrderSummaryCommerceAdditionalPriceMapping(planName)
    {
        const apiValue = await jsonpath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productPrice[?(@.priceType == 'commerceAdditionalPlanPrice')].price.taxIncludedAmount.value`)[0];
        softExpect(await this.getPlainPriceAsInt(this.orderSummaryAdditionalDiscountedPrice), "The Order Summary Commerce Additional Plan Price Mapping is correct").toEqual(apiValue)
    }

    async validateOrderSummaryListAdditionalPriceMapping(planName)
    {
        const apiValue = await jsonpath.query(this.recommendationsApiResponse, `$[?(@.name == '${planName}')].recommendationItem[0].product.productPrice[?(@.priceType == 'listAdditionalPlanPrice')].price.taxIncludedAmount.value`)[0];
        softExpect(await this.getPlainRecurringPriceAsInt(this.orderSummaryAdditionalPrice), "The Order SummaryAddtional List Price Mapping is correct").toEqual(apiValue);
    }
    
    async validateOrderSummaryTotalDiscountedPriceFormat(totalPriceAfterDiscount)
    {
        await softExpect(this.orderSummaryTotalPriceBefore6Months, "Order summary total price after discount is displayed correctly").toHaveText(totalPriceAfterDiscount);
    }

    async validateOrderSummaryTotalPriceFormat(totalPriceAfter6Months)
    {
        await softExpect(this.orderSummaryTotalPrice, "Order summary total price after 6 months is displayed correctly").toHaveText(totalPriceAfter6Months);
    }

    async validatePricePerPlanFormat(pricePerPlan)
    {
        await softExpect(this.orderSummaryPricePerPlan, "Order summary price per plan is displayed correctly").toHaveText(pricePerPlan);
    }

    async validatePricePerPlanIsNotDisplayed()
    {
        await softExpect(this.orderSummaryPricePerPlan, "Order summary price per plan is hidden").toHaveCount(0);
    }

    async validateOrderSummaryAdditionalDiscountedPriceCalculation()
    {
        await softExpect(this.getTotalDiscountedPrice(this.additionalDiscountedPrice, this.additionalDiscountedPrice), "Order summary Additional plan Discounted Price is calculated correctly").
        toEqual(this.getPlainPriceAsInt(this.orderSummaryAdditionalDiscountedPrice));

    }

    async validateOrderSummaryAddtionalPriceCalculation()
    {
        await softExpect(this.getTotalOriginalPrice(this.additionalPriceAfter6Months, this.additionalPriceAfter6Months), "Order summary Additional Plan Price is calculated correctly").toEqual(this.getPlainRecurringPriceAsInt(this.orderSummaryAdditionalPrice));
    }

    async validateOrderSummaryTotalDiscountPriceCalculation()
    {
        await softExpect(this.getTotalDiscountedPrice(this.orderSummaryAdditionalDiscountedPrice, this.orderSummaryDiscountedPrice), "Order summary Total Discounted Price is calculated correctly").toEqual(this.getPlainPriceAsInt(this.orderSummaryTotalDiscountedPrice));

    }

    async validateOrderSummaryTotalPriceCalculation()
    {
        await softExpect(this.getTotalOriginalPrice(this.orderSummaryAdditionalPrice, this.orderSummaryOriginalPrice), "Order summary Total Plan Price is calculated correctly").toEqual(this.getPlainRecurringPriceAsInt(this.orderSummaryTotalPrice));
    }

    async validateOrderSummaryPricePerPlanCalculation(totalPlansNumber)
    {
        await softExpect(this.getPricePerPlanFormated(this.orderSummaryTotalDiscountedPrice, totalPlansNumber), "Price per plan is calculated correctly").toHaveText(this.getPlainPriceAsString(this.orderSummaryPricePerPlan));
    }

}