import { BasePage } from "./basePage"

export class HomePage extends BasePage {

    private myAccLink = "//span[@class='caret']"
    private registerLink = '"link", { name: "Register" }'

    async clickMyAcc(){
        await this.Click(this.myAccLink)
    }

    async clickRegisterLink(){
        await this.Click(this.registerLink)
    }

}