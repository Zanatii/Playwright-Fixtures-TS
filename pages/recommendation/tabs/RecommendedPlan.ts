import { expect, type Locator, type Page } from '@playwright/test';
import { OrderSummary } from '../OrderSummary';
const softExpect = expect.configure({ soft: true });

export class RecommendedTab extends OrderSummary{

    constructor(page: Page){

        super(page);
        this.nextButton = page.locator("#questionnaire-button-next");
        this.backButton = page.getByTestId("back-button");
        this.compareButton = page.getByTestId("compare-devices-button");
    
        // Recommended Plan tab locators

        this.tabButton = page.getByRole("tab").nth(0);
        this.tabTitle = page.getByTestId("tab-0");
        this.planTitle = page.getByTestId("plan-topText").nth(0);
        this.planName = page.getByTestId("plan-mainText").nth(0);
        this.discount = page.locator("//div[@data-test-id='discount-amount-0']");
        this.plan5GIcon = page.getByTestId("5G-icon-0");
        this.plan5GIconURL = page.locator("//picture[@data-testid='5G-icon-0']//img");
        this.discountedPrice = page.getByTestId("right-stack-lg-main-text").nth(0);
        this.priceTerm = page.getByTestId("right-stack-normal-main-text").nth(0);
        this.planPriceBefore3Months = page.locator("//div[@data-test-id='price-after-discount-0']");
        this.planPriceAfter3Months = page.getByTestId("price-value-0");
        this.planFeatureTitle = (featureIndex) => {return this.page.getByTestId("feature-name-0").nth(featureIndex)};
        this.planFeatureDescription = (featureIndex) => {return this.page.getByTestId("feature-desc-0").nth(featureIndex)};
        this.planFeatureAccordion = (featureIndex) => {return this.page.locator("//div[@data-testid='accordion-0']//button").nth(featureIndex)};
        this.planFeatureIcon = (featureIndex) => {return this.page.locator("//picture[@data-testid='feature-icon-0']//img").nth(featureIndex)};
        this.allAccordions = page.locator("//div[@data-testid='accordion-0']//button");
    }
}