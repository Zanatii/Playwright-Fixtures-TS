import {test} from '../../fixtures/dataFixtures';



test('Validate the recommended plan name mapping', async ({ questionsData, adjustSelection, plan99Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validatePlanNameMapping(plan99Data.name);
    
});

test('Validate the recommended plan prices mapping', async ({ questionsData, adjustSelection, plan99Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateTheCommercePriceMapping(plan99Data.name);
    await recommendedTab.validateTheRecurringPriceMapping(plan99Data.name);
    
});

test('Validate the recommended plan price mapping incase if no discount', async ({ questionsData, adjustSelection, plan99Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateRecurringPriceIsDisplayedAsMain(plan99Data.name);
    
});

test('Validate the recommended plan recurring price mapping incase if no commerce price', async ({ questionsData, adjustSelection, plan29Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q5.questionNumber);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();

    await recommendedTab.validateDiscountedPriceIsHidden();
    await recommendedTab.validateDiscountTagIsHidden();
    await recommendedTab.validateRecurringPriceIsDisplayedAsMain(plan29Data.name);
    
    
});

test('Validate the recommended plan features title mapping', async ({ questionsData, recommendationsData, adjustSelection, plan99Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validatePlanFeatureTitleMapping(plan99Data.name, recommendationsData.featureOrder.first, recommendationsData.featureTitle.data);
    await recommendedTab.validatePlanFeatureTitleMapping(plan99Data.name, recommendationsData.featureOrder.second, recommendationsData.featureTitle.SMS);
    await recommendedTab.validatePlanFeatureTitleMapping(plan99Data.name, recommendationsData.featureOrder.third, recommendationsData.featureTitle.calls);
    await recommendedTab.validatePlanFeatureTitleMapping(plan99Data.name, recommendationsData.featureOrder.fourth, recommendationsData.featureTitle.roaming);
    
});

test('Validate the recommended plan features description mapping', async ({ questionsData, recommendationsData, adjustSelection, plan99Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validatePlanFeatureDescriptionMapping(plan99Data.name, recommendationsData.featureOrder.first, recommendationsData.featureTitle.data);
    await recommendedTab.validatePlanFeatureDescriptionMapping(plan99Data.name, recommendationsData.featureOrder.second, recommendationsData.featureTitle.SMS);
    await recommendedTab.validatePlanFeatureDescriptionMapping(plan99Data.name, recommendationsData.featureOrder.third, recommendationsData.featureTitle.calls);
    await recommendedTab.validatePlanFeatureDescriptionMapping(plan99Data.name, recommendationsData.featureOrder.fourth, recommendationsData.featureTitle.roaming);
    
});


test('Validate the alternative plan name mapping', async ({ questionsData, adjustSelection, plan79Data, alternativeTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A2);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await alternativeTab.clickNextAndGetQueryProductAPIResponse();
    await alternativeTab.selectTab();
    
    await alternativeTab.validatePlanNameMapping(plan79Data.name);
    
});

test('Validate the alternative plan prices mapping', async ({ questionsData, adjustSelection, plan79Data, alternativeTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A2);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await alternativeTab.clickNextAndGetQueryProductAPIResponse();
    await alternativeTab.selectTab();
    
    await alternativeTab.validateTheCommercePriceMapping(plan79Data.name);
    await alternativeTab.validateTheRecurringPriceMapping(plan79Data.name);
});

test('Validate the alternative plan price mapping incase if no discount', async ({ questionsData, adjustSelection, plan99Data, alternativeTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await alternativeTab.clickNextAndGetQueryProductAPIResponse();
    await alternativeTab.selectTab();
    
    await alternativeTab.validateRecurringPriceIsDisplayedAsMain(plan99Data.name);
});

test('Validate the alternative plan recurring price mapping incase if no commerce price', async ({ questionsData, adjustSelection, plan34Data, alternativeTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q5.questionNumber);
    await alternativeTab.clickNextAndGetQueryProductAPIResponse();
    await alternativeTab.selectTab();

    await alternativeTab.validateDiscountedPriceIsHidden();
    await alternativeTab.validateDiscountTagIsHidden();
    await alternativeTab.validateRecurringPriceIsDisplayedAsMain(plan34Data.name);
    
    
});

test('Validate the alternative plan features title mapping', async ({ questionsData, recommendationsData, adjustSelection, plan79Data, alternativeTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A2);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await alternativeTab.clickNextAndGetQueryProductAPIResponse();
    await alternativeTab.selectTab();
    
    await alternativeTab.validatePlanFeatureTitleMapping(plan79Data.name, recommendationsData.featureOrder.first, recommendationsData.featureTitle.data);
    await alternativeTab.validatePlanFeatureTitleMapping(plan79Data.name, recommendationsData.featureOrder.second, recommendationsData.featureTitle.SMS);
    await alternativeTab.validatePlanFeatureTitleMapping(plan79Data.name, recommendationsData.featureOrder.third, recommendationsData.featureTitle.calls);
    await alternativeTab.validatePlanFeatureTitleMapping(plan79Data.name, recommendationsData.featureOrder.fourth, recommendationsData.featureTitle.roaming);
    
});

test('Validate the alternative plan features description mapping', async ({ questionsData, recommendationsData, adjustSelection, plan79Data, alternativeTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A2);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.selectAnswerButton(questionsData.Q5.A2);
    await alternativeTab.clickNextAndGetQueryProductAPIResponse();
    await alternativeTab.selectTab();
    
    await alternativeTab.validatePlanFeatureDescriptionMapping(plan79Data.name, recommendationsData.featureOrder.first, recommendationsData.featureTitle.data);
    await alternativeTab.validatePlanFeatureDescriptionMapping(plan79Data.name, recommendationsData.featureOrder.second, recommendationsData.featureTitle.SMS);
    await alternativeTab.validatePlanFeatureDescriptionMapping(plan79Data.name, recommendationsData.featureOrder.third, recommendationsData.featureTitle.calls);
    await alternativeTab.validatePlanFeatureDescriptionMapping(plan79Data.name, recommendationsData.featureOrder.fourth, recommendationsData.featureTitle.roaming);
    
});