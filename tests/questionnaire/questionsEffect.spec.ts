import {test} from '../../fixtures/dataFixtures';



test("Validate the discount is not applied in case of customer getting new line", async ({ questionsData, adjustSelection, recommendedTab }) =>{
    
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();

    await recommendedTab.validateDiscountTagIsHidden();
    await recommendedTab.validateDiscountedPriceIsHidden();
});

test("Validate the roaming question functionality in case of selecting no roaming", async ({ questionsData, adjustSelection, recommendedTab }) =>{
    
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();

    await recommendedTab.validateDiscountTagIsHidden();
    await recommendedTab.validateDiscountedPriceIsHidden();
});

test("Validate the roaming question functionality in case of selecting occasional roaming", async ({ questionsData, adjustSelection, recommendedTab }) =>{
    
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();

    await recommendedTab.validateDiscountTagIsHidden();
    await recommendedTab.validateDiscountedPriceIsHidden();
});

test("Validate the roaming question functionality in case of selecting frequently roaming", async ({ questionsData, adjustSelection, recommendedTab }) =>{
    
    await adjustSelection.navigateToQuestion(questionsData.Q3.questionNumber);
    await adjustSelection.selectAnswerButton(questionsData.Q3.A3);
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();
    await adjustSelection.clickNextButton();

    await recommendedTab.validateDiscountTagIsHidden();
    await recommendedTab.validateDiscountedPriceIsHidden();
});


/// Add the new logic for unlimited data effect