import { BasePage } from "./basePage"
import { Locator, Page } from 'playwright'

export class RegisterPage extends BasePage {

    readonly firsName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly password: Locator
    readonly confirmPassword: Locator
    readonly registerBtn: Locator
    readonly registerCompleted: Locator

    constructor(page: Page) {
        super(page)
        this.firsName = page.locator("input[name='FirstName']")
        this.lastName = page.locator("input[name='LastName']")
        this.email = page.locator("input[name='Email']")
        this.password = page.locator("input[name='Password']")
        this.confirmPassword = page.locator("input[name='ConfirmPassword']")
        this.registerBtn = page.locator("input[id='register-button']")
        this.registerCompleted = page.locator("div[class='result']")
    }

    async fillRegisterForm(fname: string, lname: string, email: string, password: string, confirmPassword: string) {
        await this.fill(this.firsName, fname)
        await this.fill(this.lastName, lname)
        await this.fill(this.email, email)
        await this.fill(this.password, password)
        await this.fill(this.confirmPassword, confirmPassword)
    }

    async clickLoginBtn() {
        await this.click(this.registerBtn)
    }

    async regVerify() {
        return this.registerCompleted
    }
}