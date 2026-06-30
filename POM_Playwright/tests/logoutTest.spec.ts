import { expect } from "@playwright/test"
import { test } from "../fixture/baseFixture.ts"
import loginData from '../testData/loginData.json'

test.describe("Login Test", () => {

    test.beforeEach(async ({ LoginPage }) => {
        await LoginPage.navigate()
        await LoginPage.login(loginData.validUser.username, loginData.validUser.password)

    })

    test("Logout", async ({ LoginPage, DashboardPage }) => {
        DashboardPage.logOut()
        expect(await LoginPage.getLoginTitle()).toBe("Login")
    })

})