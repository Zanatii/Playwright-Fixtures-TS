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
        await this.page.goto("ADD The TEST ENV. LINK");
    }

    async clickOnEntryPoint()
    {
        await this.entryPoint.click();
    }
}
