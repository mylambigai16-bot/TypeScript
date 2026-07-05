import {Given, When, Then} from "@cucumber/cucumber"
import { CustomWorld } from "../world/customWorld";
import {expect} from "@playwright/test"

Given('Launch the application', async function (this: CustomWorld) {
  await this.homePage.launchBrowser("https://tutorialsninja.com/demo/")
});

When('the user click Register link', async function (this: CustomWorld) {
  await this.homePage.clickMyAcc()
  await this.homePage.clickRegisterLink()
});

When('the user enter the following details', async function (this: CustomWorld,dataTable) {
  const reg = dataTable.hashes()[0]
  
  await this.registerPage.registerForm(reg.Firstname,reg.lastname,reg.email,reg.telephone,reg.password,reg.confirmPassword)
});

When('the user click the privacy policy', async function (this: CustomWorld) {
  await this.registerPage.clickCheckBox()
});

When('the user click continue button', async function (this: CustomWorld) {
  await this.registerPage.clickSubmit()
});

Then('the user should able register successfully', async function (this: CustomWorld) {
  const verifyMessage  = this.registerPage.verifyRegistration()
  await expect(await verifyMessage).toContain("Your Account Has Been Created!")

});

Then('the user should able to see the error message', async function (this: CustomWorld) {
  await expect(await this.registerPage.failRegistration()).toContain("Warning: E-Mail Address is already registered!")
}); 