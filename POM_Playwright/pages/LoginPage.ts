import {Page, Locator} from "@playwright/test"

export class LoginPage{

    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator
    readonly loginTitle: Locator
    readonly errorMessage: Locator

    constructor(page: Page){

        this.page = page
        this.loginTitle = page.locator("//h5[text()='Login']")
        this.username = page.getByPlaceholder("Username")
        this.password = page.getByPlaceholder("Password")
        this.loginButton = page.locator("button[type='submit']")
        this.errorMessage = page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")
    }

    async navigate(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        {waitUntill: 'domcontentloaded'}
        
    }

    async getLoginTitle(){
        return await this.loginTitle.textContent({timeout:10000})
    }

    async login(username: string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent()
    }
}
