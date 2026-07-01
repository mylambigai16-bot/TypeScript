import {Page, Locator, expect} from '@playwright/test'

export class Homepage{
    readonly page : Page
    readonly login_link : Locator
    readonly username : Locator
    readonly password : Locator
    readonly login_btn : Locator
    readonly nameOfUser : Locator

constructor(page: Page){

    this.page = page
    this.login_link = page.locator("#login2")
    this.username = page.locator("#loginusername")
    this.password = page.locator("#loginpassword")
    this.login_btn = page.locator("button[onclick='logIn()']")
    this.nameOfUser = page.locator("#nameofuser")
}

async navigate(){
    await this.page.goto(process.env.base_url!)
}

async enterCredentials(username: string, password: string){
    await this.login_link.click()
    await this.username.fill(username)
    await this.password.fill(password)
}

async clickLoginBtn(){
    await this.login_btn.click()
}

async verifyLogin(){
    return this.nameOfUser
}


}
