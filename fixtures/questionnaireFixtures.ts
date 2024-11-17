import { test as base } from '@playwright/test';
import { LandingPage } from "../pages/LandingPage";
import { Questionnaire } from "../pages/questionnaire/QuestionPage";


type TestFixtures = {

  landingPage: LandingPage;
  questionnaire: Questionnaire;
};

export const test = base.extend<TestFixtures>({
  // Page object fixtures
  landingPage: async ({ page }, use) => {
    const lP = new LandingPage(page);
    await lP.goTo();
    await lP.clickOnEntryPoint();
    await use(lP);
  },
  
  questionnaire: async ({ page, landingPage }, use) => {

    await use(new Questionnaire(page));
  }
});