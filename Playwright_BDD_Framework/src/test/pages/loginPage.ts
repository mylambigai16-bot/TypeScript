import { BasePage } from "./basePage";
import {Page} from 'playwright'

export class LoginPage extends BasePage{

    private email = "input[id='input-email']"
    private password = "input[id='input-password']"
    private login_btn = "input[value='Login']"
    private myAccText = "//h2[text()='My Account']"
    private warning = "div[class='alert alert-danger alert-dismissible']"

    constructor(page: Page) {
        super(page);
    }

    async fillLoginForm(email:string, password:string){
        await this.type(this.email,email)
        await this.type(this.password,password)
    }

    async clickLogin_btn(){
        await this.click(this.login_btn)
    }

    async loginVerify(){
        return this.page.locator(this.myAccText)
    }

    async warningMessageVerify(){
        return await this.getText(this.warning)
    }
}