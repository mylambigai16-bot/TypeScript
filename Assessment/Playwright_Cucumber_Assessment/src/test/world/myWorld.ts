import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from 'playwright'
import { HomePage } from "../pages/homePage";
import { RegisterPage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginPage";

export class MyWorld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page

    homePage!: HomePage
    registerPage!: RegisterPage
    loginPage!: LoginPage

}

setWorldConstructor(MyWorld);