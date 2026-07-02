import { Page, Locator } from "@playwright/test"

export class SearchPage {
    readonly page: Page
    readonly proList: Locator

    constructor(page: Page) {
        this.page = page
        this.proList = page.locator("//h4")

    }

    async listProduct() {
        return this.proList
    }

}