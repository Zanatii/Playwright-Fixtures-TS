import { expect, type Locator, type Page } from '@playwright/test';
import { OrderSummary } from '../OrderSummary';
const softExpect = expect.configure({ soft: true });

export class AlternativeTab extends OrderSummary{

    constructor(page: Page){

        super(page);
        this.nextButton = page.locator("#questionnaire-button-next");
        this.backButton = page.getByTestId("back-button");
        this.compareButton = page.getByTestId("compare-devices-button");
    
        // Alternative Plan tab locators

        this.tabButton = page.getByRole("tab").nth(1);
        this.tabTitle = page.getByTestId("tab-1");
        this.planTitle = page.getByTestId("plan-topText").nth(1);
        this.planName = page.getByTestId("plan-mainText").nth(1);
        this.discount = page.locator("//div[@data-test-id='discount-amount-1']");
        this.plan5GIcon = page.getByTestId("5G-icon-1");
        this.plan5GIconURL = page.locator("//picture[@data-testid='5G-icon-1']//img");
        this.discountedPrice = page.getByTestId("right-stack-lg-main-text").nth(1); //this.discountedPrice = page.locator("//div[@data-test-id='price-after-discount-1']//h2").nth(0);
        this.priceTerm = page.getByTestId("right-stack-normal-main-text").nth(1); //this.priceTerm = page.locator("//div[@data-test-id='price-after-discount-1']//h2").nth(1);
        this.planPriceBefore3Months = page.locator("//div[@data-test-id='price-after-discount-1']");
        this.planPriceAfter3Months = page.getByTestId("price-value-1");
        this.planFeatureTitle = (featureIndex) => {return this.page.getByTestId("feature-name-1").nth(featureIndex)};
        this.planFeatureDescription = (featureIndex) => {return this.page.getByTestId("feature-desc-1").nth(featureIndex)};
        this.planFeatureAccordion = (featureIndex) => {return this.page.locator("//div[@data-testid='accordion-1']//button").nth(featureIndex)};
        this.planFeatureIcon = (featureIndex) => {return this.page.locator("//picture[@data-testid='feature-icon-1']//img").nth(featureIndex)};
        this.allAccordions = page.locator("//div[@data-testid='accordion-1']//button");
    }
}