import {Given, When, Then} from "@cucumber/cucumber"
import { CustomWorld } from "../world/customWorld";
import {expect} from "@playwright/test"

Given('Launch the application', async function (this: CustomWorld) {
  this.basePage.open("https://tutorialsninja.com/demo/")
});

When('the user click Register link', async function (this: CustomWorld) {
  this.homePage.clickMyAcc()
  this.homePage.clickRegisterLink()
});

When('the user enter the following details', async function (this: CustomWorld,dataTable) {
  const reg = dataTable.hashes()[0]
  
    this.registerPage.registerForm(reg.Firstname,reg.lastname,reg.email,reg.telephone,reg.password,reg.confirmPassword)
});

When('the user click the privacy policy', async function (this: CustomWorld) {
  this.registerPage.clickCheckBox()
});

When('the user click continue button', async function (this: CustomWorld) {
  this.registerPage.clickSubmit()
});

Then('the user should able register successfully', async function (this: CustomWorld) {
  const verifyMessage  = this.registerPage.verifyRegistration()
  expect(await verifyMessage).toContain("Your Account Has Been Created!")

});

Then('the user should able to see the error message', async function (this: CustomWorld) {
  expect(this.registerPage.failRegistration()).toContain("Warning: E-Mail Address is already registered!")
});