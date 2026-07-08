import { Given, When, Then } from "@cucumber/cucumber";
import { MyWorld } from "../world/myWorld.ts";
import { expect } from '@playwright/test'
import { login, loginData } from '../utilities/csvReader.ts';

const loginUser: loginData[] = login()
const valid = loginUser.find(loginUser => loginUser.type === 'valid')
const invalid = loginUser.find(loginUser => loginUser.type === 'invalid')

Given('click on the Login link', async function (this: MyWorld) {
    await this.homePage.clickLogin()

});

Given('enter email and password', async function (this: MyWorld) {
    this.loginPage.fillLoginForm(valid!.email, valid!.password)
});

When('click on the Login buttton', async function (this: MyWorld) {
    this.loginPage.clickLoginBTn()
});

Then('user should login successfully', async function (this: MyWorld) {
    this.homePage.logoutDisplay()
});

Given('enter invalid email and password', async function (this: MyWorld) {
    this.loginPage.fillLoginForm(invalid!.email, invalid!.password)
});

Then('user should get error message', async function (this: MyWorld) {
    const actual = await this.loginPage.errorMsgVerify()
    await expect(actual).toContainText("The credentials provided are incorrect")
});