import { Given, When, Then } from '@cucumber/cucumber'
import { MyWorld } from '../world/myWorld.ts';
import { expect } from '@playwright/test';

Given('the user on the Homepage', async function (this: MyWorld) {
    await this.homePage.launchApp()
});

Given('user click on the register link', async function (this: MyWorld) {
    await this.homePage.clickReg()
});

Given('fill the mandatory field {string},{string},{string},{string} and {string}', async function (fname, lname, email, password, confirmpassword) {
    await this.registerPage.fillRegisterForm(fname, lname, email, password, confirmpassword)
});

When('user click on Register button', async function (this: MyWorld) {
    await this.registerPage.clickLoginBtn()

});

Then('application displat the registration completed message', async function (this: MyWorld) {
    const actual = await this.registerPage.regVerify()
    await expect(actual).toContainText("Your registration completed")
});