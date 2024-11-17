import { expect, type Locator, type Page } from '@playwright/test';

export class ErrorPage{
    page : Page;
    title : Locator;
    subtitle : Locator;
    restartButton : Locator;
    confirmButton : Locator;
    errorImage : Locator;
    closeButton : Locator;

    constructor(page: Page){
        this.page = page;
        this.title = page.locator("//h2[@data-test-id='error-title']");
        this.subtitle = page.locator("//p[@data-test-id='error-subtitle']");
        this.confirmButton = page.locator("//button[@data-test-id='error-try-again-btn']");
        this.restartButton = page.locator("//h2[@data-test-id='error-back-btn']");
        this.errorImage = page.locator("//div[@id='error-screen-body']//*/picture/img");
        this.closeButton = page.locator("//h2[@data-test-id='overlay-button-close']");
    }

    async goTo()
    {
        //await this.page.goto("https://gr-app1-test.app-preprod.digitalretail.vodafone.com/");
        await this.page.goto("https://opw-app4-test.app-stage.digitalretail.vodafone.com/");
    }

    async clickOnEntryPoint()
    {
        await this.entryPoint.click();
    }
}