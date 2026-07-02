import { test as base } from "@playwright/test"
import { Homepage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegistrationPage"
import { SearchPage } from "../pages/SearchProPage"

type Fixtures = {
    homePage: Homepage
    loginPage: LoginPage
    registerPage: RegisterPage
    searchPage: SearchPage

}

export const test = base.extend<Fixtures>({

    homePage: async ({ page }, use) => {
        await use(new Homepage(page))
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },

    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page))
    }

});