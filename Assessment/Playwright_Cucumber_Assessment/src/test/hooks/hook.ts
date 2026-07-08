import { chromium } from "@playwright/test";
import { MyWorld } from "../world/myWorld";
import { BeforeAll, AfterAll,Before, After } from "@cucumber/cucumber";
import { HomePage } from "../pages/homePage";
import { RegisterPage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginPage";
import dotenv from 'dotenv';

const envName = process.env.ENV || 'qa'
dotenv.config({ path: `./env/.env.${envName}`});

let browserName: any;

BeforeAll(async () => {
    browserName = await chromium.launch({ headless: false })
})

Before(async function (this: MyWorld) {
    console.log("Before Hooks...!")
    this.browser = browserName
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()

    this.homePage = new HomePage(this.page)
    this.registerPage = new RegisterPage(this.page)
    this.loginPage = new LoginPage(this.page)

})

After(async function (this: MyWorld) {
    const path = `reports/screenshots/${Date.now()}.png`
    await this.page.screenshot({ path })

    await this.page.close()
    await this.context.close()

})
AfterAll(async () => {
    await browserName.close()

})