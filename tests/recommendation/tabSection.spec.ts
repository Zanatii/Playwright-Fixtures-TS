//import {test} from '../../fixtures/recommendationFixtures';
import {test} from '../../fixtures/dataFixtures';


//// number of displayed tabs validation


test("Validate the recommended tab static data", async ({ recommendationsData, defaultRecommended }) =>{
    
    await defaultRecommended.validateTheTabIsSelected();
    await defaultRecommended.validateTabTitle(recommendationsData.tab.recommendedTitle);
    await defaultRecommended.validatePlanTitle(recommendationsData.tab.planTitle);
    await defaultRecommended.validatePlanName(recommendationsData.planName.plan29)
    await defaultRecommended.validateThe5GIconIsDisplayed(recommendationsData.tab.img5gURL);
});

test("Validate the alternative tab static data", async ({ recommendationsData, defaultAlternative }) =>{
    
    await defaultAlternative.selectTab();
    await defaultAlternative.validateTheTabIsSelected();
    await defaultAlternative.validateTabTitle(recommendationsData.tab.alternativeTitle);
    await defaultAlternative.validatePlanTitle(recommendationsData.tab.planTitle);
    await defaultAlternative.validatePlanName(recommendationsData.planName.plan34)
    await defaultAlternative.validateThe5GIconIsDisplayed(recommendationsData.tab.img5gURL);
});

test("Validate the recommend tab price and discount formats and currency symbol", async ({ questionsData, adjustSelection, recommendedTab }) =>{
    
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await adjustSelection.clickNextButton();

    await recommendedTab.validateCommercePriceFormat();
    await recommendedTab.validateRecurringPriceFormat();
    await recommendedTab.validateDiscountFormat();
});

test("Validate the alternative tab price and discount formats and currency symbol", async ({ questionsData, adjustSelection, alternativeTab }) =>{
    
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await adjustSelection.clickNextButton();
    await alternativeTab.selectTab();

    await alternativeTab.validateCommercePriceFormat();
    await alternativeTab.validateRecurringPriceFormat();
    await alternativeTab.validateDiscountFormat();
});

test("Validate the recommend tab discount calculation", async ({ questionsData, adjustSelection, recommendedTab }) =>{
    
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await adjustSelection.clickNextButton();

    await recommendedTab.validateTheDiscountTagCalculation();
});

test("Validate the alternative tab  discount calculation", async ({ questionsData, adjustSelection, alternativeTab }) =>{
    
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await adjustSelection.clickNextButton();
    await alternativeTab.selectTab();

    await alternativeTab.validateTheDiscountTagCalculation();
});

test("Validate the feature Icons in the recommended tab", async ({recommendationsData, questionsData, adjustSelection, recommendedTab}) => {
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();

    await recommendedTab.validateFeatureIconSourceURL(recommendationsData.featureOrder.first, recommendationsData.tab.dataIconURL);
    await recommendedTab.validateFeatureIconSourceURL(recommendationsData.featureOrder.second, recommendationsData.tab.SMSIconURL);
    await recommendedTab.validateFeatureIconSourceURL(recommendationsData.featureOrder.third, recommendationsData.tab.callsIconURL);
    await recommendedTab.validateFeatureIconSourceURL(recommendationsData.featureOrder.fourth, recommendationsData.tab.roamingIcon5URL);
});

test("Validate the feature Icons in the alternative tab", async ({recommendationsData, questionsData, adjustSelection, alternativeTab}) => {
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await alternativeTab.selectTab();

    await alternativeTab.validateFeatureIconSourceURL(recommendationsData.featureOrder.first, recommendationsData.tab.dataIconURL);
    await alternativeTab.validateFeatureIconSourceURL(recommendationsData.featureOrder.second, recommendationsData.tab.SMSIconURL);
    await alternativeTab.validateFeatureIconSourceURL(recommendationsData.featureOrder.third, recommendationsData.tab.callsIconURL);
    await alternativeTab.validateFeatureIconSourceURL(recommendationsData.featureOrder.fourth, recommendationsData.tab.roamingIcon5URL);
});



