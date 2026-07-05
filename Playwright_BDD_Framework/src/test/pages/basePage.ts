import { Page } from "playwright"
import {logger} from "../utils/Logger"

export class BasePage {
    constructor(protected page: Page) { }

    async click(locator: string) {
        logger.info(`Clicking: ${locator}`);
        await this.page.locator(locator).click();
    }
    async getText(locator: string) {
        logger.info(`Clicking: ${locator}`);
        return await this.page.locator(locator).textContent();
    }
    async type(locator: string, text: string) {
        logger.info(`Clicking: ${locator}`);
        await this.page.locator(locator).fill(text);
    }
    async open(url: string) {
        logger.info(`Clicking: ${url}`);
        await this.page.goto(url);
    }
    async checkbox(locator: string) {
        await this.page.locator(locator).check()
    }
}