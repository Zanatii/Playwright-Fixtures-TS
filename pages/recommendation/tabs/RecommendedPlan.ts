import { expect, type Locator, type Page } from '@playwright/test';
import { ComparePage } from '../ComparePage';
const softExpect = expect.configure({ soft: true });

export class RecommendationPage extends ComparePage{

    constructor(page: Page){
        super(page);
    }
}