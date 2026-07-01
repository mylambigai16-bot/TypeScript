import {test} from '../Fixture/BaseFixture'
import {expect} from "@playwright/test"
import validLoginData from '../Testdata/ValidLoginData.json'

test.describe('Cart Test',()=>{
    test.beforeEach(async({homePage})=>{
        await homePage.navigate();
        await homePage.enterCredentials(validLoginData.username,validLoginData.password)
        await homePage.clickLoginBtn()
    })
    test('Cart ',async({cartPage})=>{
        await cartPage.addtocart();
        expect (await cartPage.verifyTitle()).toContain('Samsung galaxy s6');
    })
})