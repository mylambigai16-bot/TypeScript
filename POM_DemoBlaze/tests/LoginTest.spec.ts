import validLoginData from '../Testdata/ValidLoginData.json'
import { expect } from '@playwright/test'
import {test} from "../Fixture/BaseFixture"
import { readLoginData, LoginUser } from '../Utils/csvReader'

const users: LoginUser[] = readLoginData()

console.log("CSV Details: ", users)

const invalid = users.find(user => user.type === 'invalid')
const blank = users.find(user => user.type === 'blank')

test.describe("Login", ()=>{

    test.beforeEach("Before test", async({homePage})=>{
        console.log()
        await homePage.navigate()
    })

    test("ValidLogin", async({homePage})=>{
        await homePage.enterCredentials(validLoginData.username, validLoginData.password)
        await homePage.clickLoginBtn()
        await expect(await homePage.verifyLogin()).toBeVisible({timeout:10000})
    })

    test("InvalidLogin",async({page,homePage})=>{
        homePage.enterCredentials(invalid!.username,invalid!.password)

        page.on("dialog", async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
        })

        await homePage.clickLoginBtn()
    })

    test("BlankField",async({page,homePage})=>{
        homePage.enterCredentials(blank!.username,blank!.password)

        page.on("dialog", async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
        })

        await homePage.clickLoginBtn()

    })
})
