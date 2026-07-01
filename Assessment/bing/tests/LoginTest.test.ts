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
        await loginPage.login(users[1]!.username, users[1]!.password)
        
    })

    for(let i=2; i<4 ; i++){
    test(`InvalidLogin${i}`, async({loginPage})=>{
        await loginPage.login(users[i]!.username, users[i]!.password)
        await expect(await loginPage.invalidError()).toBeVisible()
    })
}


})