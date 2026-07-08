import {Given, When, Then} from "@cucumber/cucumber"
import { CustomWorld } from "../world/customWorld";
import {expect} from "@playwright/test"
import { faker } from "@faker-js/faker";

Given('Launch the application', async function (this: CustomWorld) {
  //await this.homePage.launchBrowser(process.env.BASE_URL!)
  await this.homePage.launchBrowser()

});

When('the user click Register link', async function (this: CustomWorld) {
  await this.homePage.clickMyAcc()
  await this.homePage.clickRegisterLink()
});

When('the user enter the following details', async function (this: CustomWorld,dataTable) {
  const reg = dataTable.hashes()[0]
  const email_data = reg[2]=="email"?faker.internet.email():reg[2]
  console.log(email_data)
  await this.registerPage.registerForm(reg.Firstname,reg.lastname,email_data,reg.telephone,reg.password,reg.confirmPassword)
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