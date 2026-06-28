# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Selenium-playground\Alerts.test.ts >> alerts
- Location: playwright_1\tests\Selenium-playground\Alerts.test.ts:3:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/", waiting until "networkidle"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test("alerts",async({page})=>{
> 4  |     await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{waitUntil:"networkidle"})
     |                ^ Error: page.goto: Target page, context or browser has been closed
  5  | 
  6  |     page.on("dialog",async(alert)=>{
  7  |         console.log(await alert.message())
  8  |         await alert.accept()
  9  |     })
  10 |     
  11 |     await page.locator("(//button[text()='Click Me'])[1]").click()
  12 |     
  13 | })
```