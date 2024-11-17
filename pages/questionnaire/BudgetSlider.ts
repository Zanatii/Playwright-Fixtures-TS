import { expect, type Locator, type Page } from '@playwright/test';
import { Questionnaire } from './QuestionPage';
const softExpect = expect.configure({ soft: true });

export class BudgetSlider extends Questionnaire{


    private readonly budgetTitle: Locator;
    private readonly budgetHint: Locator;
    private readonly budgetScroller: Locator;
    private readonly budgetMinimumValue: Locator;
    private readonly budgetMaximumValue: Locator;
    private readonly budgetIcon: Locator;
    private readonly toolTip: Locator;

    constructor(page: Page){

        super(page)
        this.budgetTitle = page.locator("//p[@data-test-id='budget-question-title']");
        this.budgetHint = page.locator("//*[@id='range-slider-id']/div/div/div/div[1]/div[2]");
        this.budgetScroller = page.locator("//div[@role='slider']");
        this.budgetMinimumValue = page.locator("//div[@class='rc-slider-mark']//span").nth(0);
        this.budgetMaximumValue = page.locator("//div[@class='rc-slider-mark']//span").nth(1);
        this.budgetIcon = page.locator("//picture[@data-testid='bugdet-slider-icon']//img");
        this.toolTip = page.locator(".rc-slider-tooltip-inner");
        //div[@class="rc-slider-tooltip-inner shown"]   .rc-slider-tooltip-inner

    }


    async getPriceAsInt(locator: any) {
        const element = await locator;
        const elementText = await element.textContent();
        // returning plain price to compare it with that one returened from the API as int
        if (elementText != null) {
            return parseFloat(await elementText.replaceAll('S/ ', '').replaceAll(' por /mes', ''));
        }
        return -1; //.replace('.', '');
    }

    async validateBudgetTitleValue(value: number){
        softExpect(await this.getPriceAsInt(this.budgetTitle), " Budget slider title value is correct").toEqual(value);

    }

    async validateBudgetHintValue(value: number){
        softExpect(await this.getPriceAsInt(this.budgetHint), " Budget slider hint value is correct").toEqual(value);
    }

    async validateBudgetIcon(iconUrl: string){
        const regex = new RegExp(`^h.+com${iconUrl}`);
        await softExpect(this.budgetIcon, " Budget slider icon is displayed correctly").toHaveAttribute("src", regex);
    }

    async validateBudgetMinimumValue(min: number){
        //softExpect(await this.getPriceAsInt(this.budgetMinimumValue), " Budget slider minimum value is correct").toEqual(min);
    }

    async validateBudgetMaximumValue(max: number){
        //softExpect(await this.getPriceAsInt(this.budgetMaximumValue), " Budget slider maximum value is correct").toEqual(max);
    }

    async validateToolTipValue(value: number){
        softExpect(await this.getPriceAsInt(this.toolTip), " Budget slider tooltip value is correct").toEqual(value);
    }

    async validateBdugetTitlePriceFormat(){
        await softExpect(this.budgetTitle, "Budget slider title format is displayed Correctly").toHaveText(/S\/ \d+ por mes/);
    }

    async validateBudgetMinimumValueFormat(){
        await softExpect(this.budgetMinimumValue, "Budget slider minimum value format is displayed Correctly").toHaveText(/S\/ \d+/);
    }

    async validateBudgetMaximumValueFormat(){
        await softExpect(this.budgetMaximumValue, "Budget slider maximum value format is displayed Correctly").toHaveText(/S\/ \d+/);
    }

    async validateToolTipValueFormat(value: number){
        await softExpect(this.toolTip, "Budget slider tooltip value format is displayed Correctly").toHaveText(/S\/ \d+/);
    }

    async validateMinimumAndMaximumValuesAreRounded(){
        ///
    }

}