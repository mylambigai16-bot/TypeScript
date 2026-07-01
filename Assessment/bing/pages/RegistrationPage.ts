import { Page, Locator } from '@playwright/test';

export class RegisterPage{

    readonly page: Page
    readonly firstname: Locator
    readonly lastname: Locator
    readonly email: Locator
    readonly phone: Locator
    readonly password: Locator
    readonly confirmPassword: Locator
    readonly checkBox: Locator
    readonly continue: Locator
    readonly createdMessage: Locator


    constructor(page:Page){
        this.page = page
        this.firstname = page.locator("input[id='input-firstname']")
        this.lastname = page.locator("input[id='input-lastname']")
        this.email = page.locator("input[id='input-email']")
        this.phone = page.locator("input[id='input-telephone']")
        this.password = page.locator("input[id='input-password']")
        this.confirmPassword = page.locator("input[id='input-password']")
        this.checkBox = page.locator("input[type='checkbox']")
        this.continue = page.locator("input[value='Continue']")
        this.createdMessage = page.locator("(//h1)[2]")
    }

    async fillForm(fname:string, lname:string, email:string,phone:string,password:string,confirmPassword:string){
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.email.fill(email)
        await this.phone.fill(phone)
        await this.password.fill(password)
        await this.confirmPassword.fill(confirmPassword)
        await this.checkBox.check()
        await this.continue.click()
    }

    async verifyMsg(){
        return this.createdMessage
    }
}
