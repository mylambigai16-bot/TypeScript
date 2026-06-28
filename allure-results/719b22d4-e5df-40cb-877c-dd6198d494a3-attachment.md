# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Selenium-playground\Dropdown.test.ts >> drop down
- Location: playwright_1\tests\Selenium-playground\Dropdown.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/select-dropdown-demo/", waiting until "networkidle"

```

# Test source

```ts
  1  | import {test,expect} from'@playwright/test'
  2  | 
  3  | test("drop down",async({page})=>{
> 4  |     await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/",{waitUntil:"networkidle"})
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  | 
  6  |     await page.locator("#select-demo").click()
  7  |     await page.selectOption("#select-demo",{value:"Sunday"})
  8  | 
  9  |     //await page.locator("#multi-select").click()
  10 |     await page.selectOption("#multi-select",[{value:"Florida"},{label:"California"},{index:3}])
  11 | })
```