import { RegisterPage } from './../pages/registerPage';
import { setWorldConstructor, World } from "@cucumber/cucumber"
import {Browser,BrowserContext,Page} from "playwright"
import { HomePage } from '../pages/homePage';
import { BasePage } from '../pages/basePage';

export class CustomWorld extends World{
    browser!: Browser
    context!: BrowserContext
    page!: Page

    basePage!: BasePage
    homePage!: HomePage
    registerPage!: RegisterPage


}

setWorldConstructor(CustomWorld)
