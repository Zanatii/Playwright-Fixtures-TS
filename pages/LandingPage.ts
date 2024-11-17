import { expect, type Locator, type Page } from '@playwright/test';

export class LandingPage{
    page : Page;
    entryPoint : Locator;

    constructor(page: Page){
        this.page = page;
        this.entryPoint = page.locator("#gs-cta-button");
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