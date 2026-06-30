import { expect } from "@playwright/test"
import { test } from "../fixture/baseFixture.ts"
import loginData from '../testData/loginData.json'

test.describe("Login Test", () => {
    test.beforeEach(async ({ LoginPage }) => {
        await LoginPage.navigate()
        await LoginPage.login(loginData.validUser.username, loginData.validUser.password)

    })

    test.afterEach(async ({ DashboardPage }) => {
        await DashboardPage.logOut()
    })

    test("Dashboard", async ({ DashboardPage }) => {
        expect(DashboardPage.quickLaunchDisplay).toBe("Quick Launch")
    })

    test("Dashboard1", async ({ DashboardPage }) => {
        expect(DashboardPage.timeAtWorkCardDisplay).toBe("Time at Work")
    })

})