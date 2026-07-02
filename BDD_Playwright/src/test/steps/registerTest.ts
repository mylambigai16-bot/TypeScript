//import { pageFixture } from '../../hooks/pageFixture';
import {Given,When,Then} from '@cucumber/cucumber'
import { expect } from '@playwright/test';
import { CustomWorld } from '../../hooks/world';


// import {chromium,Page,Browser,expect} from '@playwright/test';

// let browser : Browser;
// let page : Page;


Given('Launch the application', async function () {

    // browser = await chromium.launch({headless:false});
    // page = await browser.newPage();
    await this.page.goto("https://tutorialsninja.com/demo/");
  
});

When('the user click Register link', async function (this:CustomWorld) {

    await this.page.locator("//span[@class='caret']").click();
    await this.page.getByRole("link",{name:'Register'}).click();
  
});

When('the user enter Firstname as {string}', async function (this:CustomWorld,string) {

    await this.page.locator("#input-firstname").fill(string);
 
});

When('the user enter lastname as {string}', async function (string) {

    await this.page.locator("#input-lastname").fill(string);
  
});

When('the user enter email as {string}', async function (string) {

    await this.page.locator("#input-email").fill(string);
  
});


When('the user enter telephone as {string}', async function (string) {

    await this.page.locator("#input-telephone").fill(string);
 
});

When('the user enter password as {string}', async function (string) {

    await this.page.locator("#input-password").fill(string);
  
});

When('the user click the privacy policy', async function () {
    
    await this.page.locator("//input[@type='checkbox']").check();

});

When('the user enter confirm password as {string}', async function (string) {

    await this.page.locator("#input-confirm").fill(string);

});

When('the user click continue button', async function () {

    await this.page.locator("//input[@type='submit']").click();
  
});

Then('the user should able register successfully', async function () {

    await expect (this.page.locator("//h1[text()='Your Account Has Been Created!']")).toBeVisible();
  
});


Then('the user should able to see the error message', async function () {
    await expect (this.page.locator(".alert.alert-danger.alert-dismissible")).toBeVisible();
});