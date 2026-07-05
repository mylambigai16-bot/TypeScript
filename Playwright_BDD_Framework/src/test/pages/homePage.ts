import { BasePage } from "./basePage"
import { Page } from "playwright"


export class HomePage extends BasePage {
   
     constructor(page: Page) {
        super(page);
    }

    private myAccLink = "//span[@class='caret']"
    private registerLink = "//a[text()='Register']"
    private loginLink = "//a[text()='Login']"

    async launchBrowser(url:string){
        await this.open(url)
    }
    async clickMyAcc(){
        await this.click(this.myAccLink)
    }

    async clickRegisterLink(){
        await this.click(this.registerLink)
    }

    async clickLoginLink(){
        await this.click(this.loginLink)
    }

}