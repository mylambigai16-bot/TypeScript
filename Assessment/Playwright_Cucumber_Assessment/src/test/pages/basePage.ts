import { Locator, Page } from "playwright"

export class BasePage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click(locator: Locator) {
        await locator.click()
    }

    async fill(locator: Locator, val: string) {
        await locator.clear()
        await locator.fill(val)
    }
}