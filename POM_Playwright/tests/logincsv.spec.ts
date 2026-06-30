import { expect } from "@playwright/test"
import { test } from "../fixture/baseFixture.ts"
import { readLoginData, LoginUser } from "../utils/csvReader.ts"

const users: LoginUser[] = readLoginData()

console.log("CSV Details: ", users)

const validUser = users.find(user => user.type === 'valid')
const invalidUser = users.find(user => user.type === 'invalid')

test.describe("login Test", () => {

    test.beforeEach(async ({ LoginPage }) => {
        await LoginPage.navigate()
    })

    test("Valid Login", async ({ LoginPage, DashboardPage }) => {
        if (!validUser) {
            throw new Error("No valid user")
        }
        await LoginPage.login(validUser.username, validUser.password)
        await expect(DashboardPage.dashboard).toBeVisible()
    })

    test("Invalid Login @Invalid", async ({ LoginPage }) => {
        if (!invalidUser) {
            throw new Error("No valid user")
        }
        await LoginPage.login(invalidUser.username, invalidUser.password)
        await expect(LoginPage.errorMessage).toHaveText("Invalid credentials")
    })
})


