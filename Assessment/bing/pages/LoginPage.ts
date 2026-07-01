import {Page, Locator} from "@playwright/test"

export class LoginPage{
    readonly page: Page
    readonly email:Locator
    readonly password: Locator
    readonly login_btn: Locator
    readonly error: Locator

    constructor(page: Page){
        this.page = page
        this.email = page.locator("input[id='input-email']")
        this.password = page.locator("input[id='input-password']")
        this.login_btn = page.locator("input[value='Login']")
        this.error = page.locator("div[class='alert alert-danger alert-dismissible']")

    }

    async login(email:string, password: string){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.login_btn.click()
    }

    async invalidError(){
        return this.error
    }
}