import { expect } from '@playwright/test';
import { test } from "../fixtures/basFixture.js"
import registerData from '../testData/registerData.json'

test.describe("Resgistering @smoke", ()=>{
   test.beforeEach("Before test", async ({ homePage }) => {
        await homePage.navigate("https://tutorialsninja.com/demo")
        await homePage.clickMyAcc()
        await homePage.clickReg()
    })

    test("Register @smoke", async ({ registerPage }) => {
        await registerPage.fillForm(registerData.fname,registerData.lname,
            registerData.email,registerData.phone,registerData.password,registerData.confirm)

        expect(await registerPage.verifyMsg()).toBeVisible()
        
    })

})