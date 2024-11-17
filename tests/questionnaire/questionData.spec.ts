//import {test} from "../../fixtures/fixtures";
import {test} from "../../fixtures/dataFixtures";


test("Validate first question data", async ({questionnaire, questionsData})=>{

  await questionnaire.navigateToQuestion(questionsData.Q1.questionNumber);
  await questionnaire.validateNoQuestionHeaderDisplayed();
  await questionnaire.validateQuestionTitle(questionsData.Q1.title);
  await questionnaire.validateNoQuestionSubtitleDisplayed();
  await questionnaire.validateQuestionAnswerButtton(questionsData.Q1.A1);
  await questionnaire.validateQuestionAnswerButtton(questionsData.Q1.A1);
  await questionnaire.validateTheNumberOfAnswerButtons(questionsData.Q1.numberOfAnswers);
})

test('Validate Second question data', async ({questionnaire, questionsData}) => {
  
  await questionnaire.navigateToQuestion(questionsData.Q2.questionNumber);
  await questionnaire.validateNoQuestionHeaderDisplayed();
  await questionnaire.validateQuestionTitle(questionsData.Q2.title);
  await questionnaire.validateQuestionSubtitle(questionsData.Q2.subtitle);
  await questionnaire.validateSliderQuestionTitle(questionsData.Q2.sliderQuestion1, 0);
  await questionnaire.validateSliderQuestionTitle(questionsData.Q2.sliderQuestion2, 1);
  await questionnaire.validateSliderQuestionTitle(questionsData.Q2.sliderQuestion3, 2);
  await questionnaire.validateSliderQuestionTitle(questionsData.Q2.sliderQuestion4, 3);
  await questionnaire.validateSliderQuestionTitle(questionsData.Q2.sliderQuestion5, 4);
  await questionnaire.validateSliderQuestionTitle(questionsData.Q2.sliderQuestion6, 5);
  await questionnaire.validateSliderAnswerTitle(questionsData.Q2.A1, questionsData.Q2.A2, questionsData.Q2.A3, 0);
  await questionnaire.validateSliderAnswerTitle(questionsData.Q2.A1, questionsData.Q2.A2, questionsData.Q2.A3, 1);
  await questionnaire.validateSliderAnswerTitle(questionsData.Q2.A1, questionsData.Q2.A2, questionsData.Q2.A3, 2);
  await questionnaire.validateSliderAnswerTitle(questionsData.Q2.A1, questionsData.Q2.A2, questionsData.Q2.A3, 3);
  await questionnaire.validateSliderAnswerTitle(questionsData.Q2.A1, questionsData.Q2.A2, questionsData.Q2.A3, 4);
  await questionnaire.validateSliderAnswerTitle(questionsData.Q2.A1, questionsData.Q2.A2, questionsData.Q2.A3, 5);
  await questionnaire.validateTheNumberOfSlidersAnswers(questionsData.Q2.numberOfSliderAnswers);
  await questionnaire.validateTheNumberOfSlidersQuestions(questionsData.Q2.numberOfSliderQuestions);
  });
  
  test('Validate Third question data', async ({questionnaire, questionsData}) => {
  
    await questionnaire.navigateToQuestion(questionsData.Q3.questionNumber);
    await questionnaire.validateNoQuestionHeaderDisplayed();
    await questionnaire.validateQuestionTitle(questionsData.Q3.title);
    await questionnaire.validateQuestionSubtitle(questionsData.Q3.subtitle);
    await questionnaire.validateQuestionAnswerButtton(questionsData.Q3.A1);
    await questionnaire.validateQuestionAnswerButtton(questionsData.Q3.A2);
    await questionnaire.validateQuestionAnswerButtton(questionsData.Q3.A3);
    await questionnaire.validateTheNumberOfAnswerButtons(questionsData.Q3.numberOfAnswers);
  });
  
  test('Validate Fourth question data', async ({questionnaire, questionsData}) => {
  
    await questionnaire.navigateToQuestion(questionsData.Q4.questionNumber);
    await questionnaire.validateNoQuestionHeaderDisplayed();
    await questionnaire.validateQuestionTitle(questionsData.Q4.title);
    await questionnaire.validateQuestionSubtitle(questionsData.Q4.subtitle);
  });
  
  test('Validate Fifth question data', async ({questionnaire, questionsData}) => {
  
    await questionnaire.navigateToQuestion(questionsData.Q5.questionNumber);
    await questionnaire.validateNoQuestionHeaderDisplayed();
    await questionnaire.validateQuestionTitle(questionsData.Q5.title);
    await questionnaire.validateQuestionSubtitle(questionsData.Q5.subtitle);
    await questionnaire.validateQuestionAnswerButtton(questionsData.Q5.A1);
    await questionnaire.validateQuestionAnswerButtton(questionsData.Q5.A2);
    await questionnaire.validateTheNumberOfAnswerButtons(questionsData.Q5.numberOfAnswers);
  });