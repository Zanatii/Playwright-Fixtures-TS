import { expect, type Locator, type Page } from '@playwright/test';
import { Questionnaire } from './QuestionPage';
const softExpect = expect.configure({ soft: true });

export class ProgressBar extends Questionnaire{


    private readonly journeyTitle: Locator;
    private readonly journeyProgress: Locator;
    private readonly progressBar: Locator;

    constructor(page: Page){

        super(page)
        this.journeyTitle = page.locator("//div[@data-test-id='progress-bar']/div/div/span").nth(0);
        this.journeyProgress = page.locator("//div[@data-test-id='progress-bar']/div/div/span").nth(1);
        this.progressBar = page.getByRole("progressbar");
    }
}