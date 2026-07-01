import {Page, Locator} from "@playwright/test"

export class Homepage{

    readonly page:Page
    readonly my_acc : Locator
    readonly registerLink : Locator
    readonly loginLink : Locator
    readonly searchBar : Locator

    constructor(page:Page){
        this.page = page,
        this.my_acc = page.locator("a[title='My Account']")
        this.registerLink = page.getByRole("link",{name: "Register"})
        this.loginLink = page.getByRole("link",{name:"Login"})
        this.searchBar = page.locator("input[name='search']")
    }

    async navigate(url:string){
        await this.page.goto(url)
    }

    async clickMyAcc(){
        await this.my_acc.click()
    }

    async clickReg(){
        await this.registerLink.click()
    }

    async clickLogin(){
        await this.loginLink.click()
    }

    async searching(searchPro:string){
        await this.searchBar.fill(searchPro)
    }
}



