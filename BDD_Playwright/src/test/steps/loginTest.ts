import { expect } from '@playwright/test';
import{Given,When,Then} from '@cucumber/cucumber';
// import { pageFixture} from '../../hooks/pageFixtures';
import { CustomWorld } from '../../hooks/world';

Given('User navigates to the application', async function () {

    // await pageFixture.page.goto("https://tutorialsninja.com/demo/")
    await this.page.goto("https://tutorialsninja.com/demo/")
  
});

Given('User clicks on the login link', async function (this:CustomWorld) {

    await this.page.locator("//span[@class='caret']").click();
    await this.page.getByRole("link",{name:'Login'}).click();
 
});

Given('User enter the email as {string}', async function (this:CustomWorld,string) {
  
    await this.page.locator("#input-email").fill(string);

});

Given('User enter the password as {string}', async function (this:CustomWorld,string) {

    await this.page.locator("#input-password").fill(string);
  
});


When('the user click login button', async function (this:CustomWorld) {
    await this.page.locator("//input[@type='submit']").click();
});

Then('the login should be successful', async function (this:CustomWorld) {
    
    await expect(this.page.locator("//h2[text()='My Account']")).toBeVisible();
 
});

Then('the login should fail', async function (this:CustomWorld) {

    await expect(this.page.locator(".alert.alert-danger.alert-dismissible")).toBeVisible();
  
});