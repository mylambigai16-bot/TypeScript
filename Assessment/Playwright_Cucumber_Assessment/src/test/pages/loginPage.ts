import { Locator, Page } from 'playwright'
import { BasePage } from './basePage'

export class LoginPage extends BasePage {

    readonly email: Locator
    readonly password: Locator
    readonly loginBtn: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        super(page)

        this.email = page.locator("input[id='Email']")
        this.password = page.locator("input[id='Password']")
        this.loginBtn = page.locator("input[value='Log in']")
        this.errorMessage = page.locator("//div[@class='validation-summary-errors']//ul")
    }

    async fillLoginForm(email: string, password: string) {
        await this.fill(this.email, email)
        await this.fill(this.password, password)
    }

    async clickLoginBTn() {
        await this.click(this.loginBtn)
    }

    async errorMsgVerify() {
        return this.errorMessage
    }

}