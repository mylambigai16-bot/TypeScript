import { BasePage } from "./basePage"

export class RegisterPage extends BasePage {
    private fname = "#input-firstname"
    private lname = "#input-lastname"
    private email = '#input-email'
    private telephone = '#input-telephone'
    private password = '#input-password'
    private confirmPassword = '#input-confirm'
    private submit_btn = "//input[@type='submit']"
    private privacy_checkbox = "//input[@type='checkbox']"
    private RegisterSuccess = "//h1[text()='Your Account Has Been Created!']"
    private RegisterError = ".alert.alert-danger.alert-dismissible"

    async registerForm(Firstname: string, Lastname: string, email: string, telephone: string, password: string, confirmPassword: string) {
        await this.type(this.fname, Firstname)
        await this.type(this.lname, Lastname)
        await this.type(this.email, email)
        await this.type(this.telephone, telephone)
        await this.type(this.password, password)
        await this.type(this.confirmPassword, confirmPassword)
    }

    async clickCheckBox(){
        await this.checkbox(this.privacy_checkbox)
    }

    async clickSubmit(){
        await this.Click(this.submit_btn)
    }

    async verifyRegistration(){
        //return this.page.locator(this.RegisterSuccess)
        return this.getText(this.RegisterSuccess)
    }

    async failRegistration(){
        return this.getText(this.RegisterError)
    }




}