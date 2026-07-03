import {Given, When, Then} from "@cucumber/cucumber"
import {chromium, Page, Browser, expect} from "@playwright/test"

let browser: Browser
let page: Page
 
Given('User Navigate to the application', async function () {
  browser = await chromium.launch({headless:false})
  page = await browser.newPage()
  await page.goto("https://bookcart.azurewebsites.net/")
});

Given('User click on login button', async function () {
  await page.locator("//span[text()=' Login ']").click()
});

Given('User enter the Username as {string}', async function (string) {
  await page.locator("input[placeholder='Username']").fill("Mugan M")
});

Given('User enter the Password as {string}', async function (string) {
  await page.locator("input[placeholder='Password']").fill("Mylu0616")
});

When('User click on the login button', async function () {
  await page.locator("//span[text()='Login']").click()
});

Then('the login should Success', async function () {
  await expect(page.locator("//span[text()=' ShamDoel']")).toBe(" ShamDoel")
});

Given('User entter the Password as {string}', async function (string) {
  await page.locator("input[placeholder='Password']").fill("")
});

Then('the login should Fail', async function () {
    await expect(page.locator(".mat-mdc-form-field-error-wrapper.ng")).toBeVisible()
  
});