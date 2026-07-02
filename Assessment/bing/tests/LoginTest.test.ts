import { expect } from '@playwright/test';
import { test } from "../fixtures/basFixture.js"
import { LoginUser,readLoginData } from '../utils/csvReader.js';

const users: LoginUser[] = readLoginData()

test.describe("Login @regression", ()=>{
   test.beforeEach("Before test", async ({ homePage }) => {
        await homePage.navigate("https://tutorialsninja.com/demo")
        await homePage.clickMyAcc()
        await homePage.clickLogin()
    })

    test("Valid Login @regression", async ({ loginPage }) => {
        await loginPage.login(users[0]!.email, users[0]!.password)
        
    })

    for(let i=1; i<3 ; i++){
    test(`InvalidLogin${i}`, async({loginPage})=>{
        await loginPage.login(users[i]!.email, users[i]!.password)
        await expect(await loginPage.invalidError()).toBeVisible()
    })
}

})