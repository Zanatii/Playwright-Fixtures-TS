import {test} from '../../fixtures/recommendationFixtures'



test('Validate the data retrived for Plan Entel Chip 29.90 C', async ({ questionsData, adjustSelection, plan29Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateThePlanApiData(plan29Data.name, plan29Data);
    
});

test('Validate the data retrived for Plan Entel Power 34.90 C', async ({ questionsData, adjustSelection, plan34Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q5.questionNumber);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateThePlanApiData(plan34Data.name, plan34Data);
    
});

test('Validate the data retrived for Plan Entel Power 44.90', async ({ questionsData, adjustSelection, plan44Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q5.questionNumber);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateThePlanApiData(plan44Data.name, plan44Data);
    
});

test('Validate the data retrived for Plan Entel Power 54.90', async ({ questionsData, adjustSelection, plan54Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q5.questionNumber);
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateThePlanApiData(plan54Data.name, plan54Data);
    
});

test('Validate the data retrived for Plan Entel Power 69.90', async ({ questionsData, adjustSelection, plan69Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A2);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateThePlanApiData(plan69Data.name, plan69Data);
    
});

test('Validate the data retrived for Plan Entel Power 79.90 SD', async ({ questionsData, adjustSelection, plan79Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A2);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateThePlanApiData(plan79Data.name, plan79Data);
    
});

test('Validate the data retrived for Plan Entel Power 99.90 SD', async ({ questionsData, adjustSelection, plan99Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateThePlanApiData(plan99Data.name, plan99Data);
    
});

test('Validate the data retrived for Plan Entel Power 129.90 SD', async ({ questionsData, adjustSelection, plan129Data, recommendedTab }) => {

    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await recommendedTab.clickNextAndGetQueryProductAPIResponse();
    
    await recommendedTab.validateThePlanApiData(plan129Data.name, plan129Data);
    
});