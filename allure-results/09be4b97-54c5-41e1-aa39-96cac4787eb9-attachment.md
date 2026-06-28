# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Selenium-playground\Demo.test.ts >> Demo
- Location: playwright_1\tests\Selenium-playground\Demo.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/simple-form-demo/", waiting until "load"

```

# Test source

```ts
  1  | import {chromium, test} from '@playwright/test'
  2  | 
  3  | test("Demo", async({page})=>{
> 4  |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |     const url = await page.url()
  6  |     console.log("URL: "+url)
  7  |     const title = await page.title()
  8  |     console.log("Title: "+title)
  9  | 
  10 |     const placeHolder_con = await page.getByPlaceholder("Please enter your Message")
  11 |     
  12 |     console.log("Placeholder value: "+placeHolder_con.getAttribute("placeholder"))
  13 | 
  14 |     await page.locator("#showInput").click()
  15 |     const name = await page.locator("p[id='message']").textContent()
  16 |     console.log("Before entering: "+name)
  17 | 
  18 |     await page.locator("input[id='user-message']").fill("myl")
  19 |     await page.locator("#showInput").click()
  20 |     const name1 = await page.locator("p[id='message']").textContent()
  21 |     console.log("After entering: "+name1)
  22 | })
```