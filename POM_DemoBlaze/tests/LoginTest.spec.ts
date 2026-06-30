import validLoginData from '../Testdata/ValidLoginData.json'
import { expect } from '@playwright/test'
import {test} from "../Fixture/BaseFixture"

test.describe("Login", ()=>{

    test.beforeEach("Before test", async({page})=>{
        console.log(validLoginData.url)
        await page.goto(validLoginData.url)
    })

    test("ValidLogin", async({homePage})=>{
        homePage.enterCredentials(validLoginData.username, validLoginData.password)
        homePage.clickLoginBtn()
        await expect(await homePage.verifyLogin()).toBeVisible()
    })
})
