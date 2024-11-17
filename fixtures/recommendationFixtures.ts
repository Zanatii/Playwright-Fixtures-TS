import { test as base } from './questionnaireFixtures';
import { LandingPage } from "../pages/LandingPage";
import { Questionnaire } from "../pages/Questionnaire/QuestionPage";
import { AlternativeTab } from "../pages/Recommendaiton/Tabs/AlternativePlan";
import { RecommendedTab } from "../pages/Recommendaiton/Tabs/RecommendedPlan";


type TestFixtures = {

  defaultSelection: Questionnaire;
  adjustSelection: Questionnaire;
  defaultRecommended: RecommendedTab;
  recommendedTab: RecommendedTab;
  defaultAlternative: AlternativeTab;
  alternativeTab: AlternativeTab;
};

export const test = base.extend<TestFixtures>({
  // Page object fixtures

  defaultSelection: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await landingPage.goTo();
    await landingPage.clickOnEntryPoint();
    const questionnaire = new Questionnaire(page);
    questionnaire.navigateToRecommendation();
    await use(questionnaire);
  },

  adjustSelection: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await landingPage.goTo();
    await landingPage.clickOnEntryPoint();
    await use(new Questionnaire(page));
  },

  defaultRecommended: async ({ page, defaultSelection }, use) => {
    await use(new RecommendedTab(page));
  },

  defaultAlternative: async ({ page, defaultSelection }, use) => {
    await use(new AlternativeTab(page));
  },

  recommendedTab: async ({ page }, use) => {
    await use(new RecommendedTab(page));
  },

  alternativeTab: async ({ page }, use) => {
    await use(new AlternativeTab(page));
  }

});