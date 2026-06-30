import { expect } from "@playwright/test"
import { test } from "../fixture/baseFixture.ts"
import loginData from '../testData/loginData.json'

test.describe("Login Test @Login", () => {
    test.beforeEach("Before test", async ({ LoginPage }) => {
        await LoginPage.navigate()
    })

    test("Invalid Login @Invalid", async ({ LoginPage }) => {
        await LoginPage.login(loginData.invalidUser.username, loginData.invalidUser.password)
        await expect(LoginPage.errorMessage).toHaveText("Invalid credentials")
    })

    test("Valid Login @Valid", async ({ LoginPage, DashboardPage }) => {
        await LoginPage.login(loginData.validUser.username, loginData.validUser.password)
        await expect(DashboardPage.dashboard).toBeVisible()
    })
})