# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\ValidLogin.test.ts >> Web element commands
- Location: tests\AutomationExercise\ValidLogin.test.ts:3:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.btn.btn-primary')

```

# Test source

```ts
  1  | import {chromium,test,expect} from "@playwright/test"
  2  | 
  3  | test("Web element commands",async()=>{
  4  |     const browser = await chromium.launch()
  5  |     const context =  await browser.newContext()
  6  |     const page =  await context.newPage()
  7  | 
  8  |     await page.goto("http://automationexercise.com")
  9  |    
  10 |     await expect(page.getByRole("link",{name:" Home"})).toHaveText(' Home');
  11 | 
  12 |     await page.locator(".fa-lock").click()
  13 |     await expect(page.locator("//div[@class='login-form']/h2")).toBeVisible()
  14 | 
  15 |     await page.locator("input[data-qa='login-email']").fill("Mugan@gmail.com")
  16 |     await page.locator("input[data-qa='login-password']").fill("123456")
  17 | 
  18 |     await page.locator("button[data-qa='login-button']").click()
> 19 |     await page.locator(".btn.btn-primary").click()    
     |                                            ^ Error: locator.click: Target page, context or browser has been closed
  20 | 
  21 |     await expect(page.locator("(//ul[@class='nav navbar-nav']//child::a)[10]")).toHaveText("Logged in as Mugan")
  22 |     await page.getByRole('link',{name:" Delete Account"}).click()
  23 |     
  24 |     await expect(page.locator("//b[text()='Account Deleted!']")).toHaveText("Account Deleted!")
  25 |     await page.locator(".btn.btn-primary").click()
  26 | 
  27 |     await expect(page).toHaveURL("https://automationexercise.com/")
  28 | 
  29 | })
```