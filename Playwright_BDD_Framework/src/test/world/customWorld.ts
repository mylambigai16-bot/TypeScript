import { RegisterPage } from './../pages/registerPage';
import { setWorldConstructor, World } from "@cucumber/cucumber"
import {Browser,BrowserContext,Page} from "playwright"
import { HomePage } from '../pages/homePage';
import { BasePage } from '../pages/basePage';
import { LoginPage } from '../pages/loginPage';
import { SearchPage } from '../pages/searchPage';

import dotenv from 'dotenv';

const envName = process.env.ENV || 'qa'
dotenv.config({ path: `./env/.env.${envName}`});

export class CustomWorld extends World{
    browser!: Browser
    context!: BrowserContext
    page!: Page

    basePage!: BasePage
    homePage!: HomePage
    registerPage!: RegisterPage
    loginPage!: LoginPage
    searchPage!: SearchPage

}

setWorldConstructor(CustomWorld)
