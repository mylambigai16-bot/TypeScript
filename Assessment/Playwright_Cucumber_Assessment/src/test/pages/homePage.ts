import { BasePage } from "./basePage";
import { Locator, Page } from "playwright"

export class HomePage extends BasePage {

    readonly registerLink: Locator
    readonly loginLink: Locator
    readonly logoutLink: Locator

    constructor(page: Page) {
        super(page)
        this.registerLink = page.getByRole("link", { name: "Register" })
        this.loginLink = page.getByRole("link", { name: "Log in" })
        this.logoutLink = page.getByRole("link", { name: "Log out" })
    }

    async launchApp() {
        await this.page.goto("https://demowebshop.tricentis.com/")
        await this.page.goto(process.env.BASE_URL!)
    }

    async clickReg() {
        await this.click(this.registerLink)
    }

    async clickLogin() {
        await this.click(this.loginLink)
    }

    async logoutDisplay() {
        return this.logoutLink
    }
}