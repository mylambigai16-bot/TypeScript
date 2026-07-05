import {Given,Then,When} from '@cucumber/cucumber'
import { expect } from '@playwright/test';
import { CustomWorld } from '../world/customWorld';
import login from "../../../testData/loginData.json";


Given('click on the My account link', async function (this:CustomWorld) {
    await this.homePage.clickMyAcc()
});

Given('click on the login link', async function (this:CustomWorld) {
  await this.homePage.clickLoginLink()
});

When('user enters valid email and password', async function (this:CustomWorld) {
  await this.loginPage.fillLoginForm(login.validLogin.email,login.validLogin.password)
});

When('click on Login button', async function (this:CustomWorld) {
    await this.loginPage.clickLogin_btn()
});

Then('user should be login successfully', async function (this:CustomWorld) {
  await expect(await this.loginPage.loginVerify()).toContain("My Account")
});

When('user enters invalid email and password', async function (this:CustomWorld) {
    await this.loginPage.fillLoginForm(login.invalidLogin.email,login.invalidLogin.password)
});

Then('user should get the warning message', async function (this:CustomWorld) {
  await expect(await this.loginPage.warningMessageVerify()).toBe("Warning: No match for E-Mail Address and/or Password.")
});