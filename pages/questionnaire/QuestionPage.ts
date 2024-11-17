import { expect, type Locator, type Page } from '@playwright/test';
const softExpect = expect.configure({ soft: true });

export class Questionnaire {

    protected readonly page: Page;
    protected readonly header: Locator;
    protected readonly title: Locator;
    protected readonly subTitle: Locator;
    protected readonly nextButton: Locator;
    protected readonly backButton: Locator;
    protected readonly restartButton: Locator;
    protected readonly closeButton: Locator;
    protected readonly answerButton: (string: string) => Locator;
    protected readonly allButtons: Locator;
    protected readonly sliderQuestionTitle: (index: number) => Locator;
    protected readonly sliderFirstAnswer: (index: number) => Locator;
    protected readonly sliderSecondAnswer: (index: number) => Locator;
    protected readonly sliderThirdAnswer: (index: number) => Locator;
    protected readonly sliderPointer: (index: number) => Locator;
    protected readonly allSlidersAnswers: Locator;
    protected readonly allSlidersQuestions: Locator;
    protected readonly allSliderBelowTexts: Locator;
    protected readonly sliderBelowText: (index: number) => Locator;


    constructor (page: Page){
        this.page = page;
        this.header = page.getByTestId("page-topTitle");
        this.title = page.getByTestId("page-title");
        this.subTitle = page.getByTestId("page-subtitle");
        this.nextButton = page.locator("#questionnaire-button-next");
        this.backButton = page.locator("#questionnaire-button-back");
        this.restartButton = page.locator("#questionnaire-button-restart");
        this.closeButton = page.getByTestId("overlay-button-close");
        this.answerButton = (titleOfTheSelectedButton: string) => {return this.page.locator("(//span[@data-title=\""+titleOfTheSelectedButton+"\"])");};
        this.allButtons = page.locator("//input[@type='checkbox']");

        this.sliderQuestionTitle = (questionIndex: number) => {return this.page.getByTestId("slider-question-title").nth(questionIndex)};
        this.sliderFirstAnswer = (questionIndex: number) => {return this.page.getByTestId("slider-answer-title-0").nth(questionIndex)};
        this.sliderSecondAnswer = (questionIndex: number) => {return this.page.getByTestId("slider-answer-title-1").nth(questionIndex)};
        this.sliderThirdAnswer = (questionIndex: number) => {return this.page.getByTestId("slider-answer-title-2").nth(questionIndex)};
        this.sliderBelowText = (textIndex: number) => {return this.page.locator(".rc-slider-mark-text").nth(textIndex)};
        this.sliderPointer = (sliderIndex: number) => {return this.page.getByRole("slider").nth(sliderIndex)};
        this.allSlidersAnswers = page.locator("//p[contains(@data-test-id,'slider-answer-title-')]");
        this.allSlidersQuestions = page.locator("//p[@data-test-id='slider-question-title']");
        this.allSliderBelowTexts = page.locator(".rc-slider-mark-text");
        
    }


    // Actions

    async clickNextButton()
    {
        await this.nextButton.click();
    }

    async clickBackButton()
    {
        await this.backButton.click();   
    }

    async selectAnswerButton(titleOfTheSelectedButton: string)
    {
        await this.answerButton(titleOfTheSelectedButton).click();
    }

    async navigateToQuestion(questionNumber: number)
    {
        for(let i = 0; i < questionNumber-1; i++)
            {
                await this.clickNextButton();
            } 
    }


    async navigateToRecommendation()
    {
        for(let i = 0; i < 5; i++)
            {
                await this.clickNextButton();
            } 
    }

    // Validations

    async validateNoQuestionHeaderDisplayed()
    {
        await this.page.waitForLoadState('networkidle');
        await softExpect(this.header, "Question header is not displayed").toHaveCount(0);
        await softExpect(this.header, "Question header is not displayed").not.toBeVisible();
    }

    async validateNoQuestionSubtitleDisplayed()
    {
        await this.page.waitForLoadState('networkidle');
        await softExpect(this.subTitle, "Question subtitle is not displayed").not.toBeVisible();
        await softExpect(this.subTitle, "Question subtitle is not displayed").toHaveCount(0);
    }
    
    async validateQuestionTitle(questionTitle: string)
    {
        await softExpect(this.title, "Question title is valid").toHaveText(questionTitle);
    }

    async validateQuestionHeader(questionHeader: string)
    {
        await softExpect(this.header, "Question Header is valid").toHaveText(questionHeader)
    }

    async validateQuestionSubtitle(questionSubtitle: string)
    {
        await softExpect(this.subTitle, "Question subtitle is valid").toHaveText(questionSubtitle)
    }

    async validateQuestionAnswerButtton(answerButtonText: string)
    {
        await softExpect(this.answerButton(answerButtonText), "Answer button is visible").toBeVisible();
        await softExpect(this.answerButton(answerButtonText), "Answer button has valid data-title value").toHaveAttribute('data-title', answerButtonText);
        await softExpect(this.answerButton(answerButtonText), "Answer button has valid text").toHaveText(answerButtonText);
    }

    async validateTheNumberOfAnswerButtons(numberOfButtons: number)
    {
        await softExpect(this.allButtons, "The number of buttons are vaild").toHaveCount(numberOfButtons);
    }

    async validateTheNumberOfSlidersAnswers(numberOfAnswers: number)
    {
        await softExpect(this.allSlidersAnswers, "The number of sliders answers are vaild").toHaveCount(numberOfAnswers);
    }

    async validateTheNumberOfSlidersQuestions(numberOfQuestions: number)
    {
        await softExpect(this.allSlidersQuestions, "The number of sliders questions are vaild").toHaveCount(numberOfQuestions);
    }

    async validateSliderQuestionTitle(sliderQuestionTitle: string, index: number)
    {
        await softExpect(this.sliderQuestionTitle(index), "Slider question title is valid").toHaveText(sliderQuestionTitle);
    }

    async validateSliderAnswerTitle(sliderFirstAnswer: string, sliderSecondAnswer: string, sliderThirdAnswer: string, questionIndex: number)
    {
        await softExpect(this.sliderFirstAnswer(questionIndex), "Slider First Answer title is valid").toHaveText(sliderFirstAnswer);
        await softExpect(this.sliderSecondAnswer(questionIndex), "Slider Second Answer title is valid").toHaveText(sliderSecondAnswer);
        await softExpect(this.sliderThirdAnswer(questionIndex), "Slider Third Answer title is valid").toHaveText(sliderThirdAnswer);
    }

    async validateTextBelowSliderAnswer(sliderValue: string, answerIndex: number)
    {
        await softExpect(this.sliderBelowText(answerIndex), "The text below slider answer is valid").toHaveText(sliderValue);
    }

    async validateTheNumberOfSliderBelowTexts(numberOfSliderSelections: number)
    {
        await softExpect(this.allSliderBelowTexts, "The number of slider selections is valid").toHaveCount(numberOfSliderSelections);
    }
}