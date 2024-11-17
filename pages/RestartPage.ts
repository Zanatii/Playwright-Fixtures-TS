import { expect, type Locator, type Page } from '@playwright/test';

export class RestartPage{
    page : Page;
    title : Locator;
    subtitle : Locator;
    cancelButton : Locator;
    confirmButton : Locator;
    restartImage : Locator;
    closeButton : Locator;

    constructor(page: Page){
        this.page = page;
        this.title = page.locator("//h2[@data-test-id='restart-title']");
        this.subtitle = page.locator("//p[@data-test-id='restart-subtitle']");
        this.confirmButton = page.locator("//button[@data-test-id='start-again-btn']");
        this.cancelButton = page.locator("//h2[@data-test-id='cancel-btn']");
        this.restartImage = page.locator("//div[@id='warning-screen-body']//*/picture/img");
        this.closeButton = page.locator("//h2[@data-test-id='overlay-button-close']");
    }

    async goTo()
    {
        //await this.page.goto("https://gr-app1-test.app-preprod.digitalretail.vodafone.com/");
        await this.page.goto("https://opw-app4-test.app-stage.digitalretail.vodafone.com/");
    }
}