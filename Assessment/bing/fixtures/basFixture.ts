import {test as base} from "@playwright/test"
import { Homepage } from "../pages/HomePage.js"
import { LoginPage } from "../pages/LoginPage.js"
import { RegisterPage } from "../pages/RegistrationPage.js"

type Fixtures ={
    homePage: Homepage
    loginPage: LoginPage
    registerPage: RegisterPage
}

export const test = base.extend<Fixtures>({

    homePage: async ({page},use)=>{
        await use(new Homepage(page))
    },
    
    loginPage: async ({page},use)=>{
        await use(new LoginPage(page))
    },

    registerPage: async ({page},use)=>{
        await use(new RegisterPage(page))
    }
})