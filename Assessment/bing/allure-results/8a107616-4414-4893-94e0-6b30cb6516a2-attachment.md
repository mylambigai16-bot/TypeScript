# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegisterTest.spec.ts >> Resgistering @smoke >> Register @smoke
- Location: tests\RegisterTest.spec.ts:12:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('xpath=(//h1[text()=\'Your Account Has Been Created!\']')
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('xpath=(//h1[text()=\'Your Account Has Been Created!\']')

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { test } from "../fixtures/basFixture.js"
  3  | import registerData from '../testData/registerData.json'
  4  | 
  5  | test.describe("Resgistering @smoke", ()=>{
  6  |    test.beforeEach("Before test", async ({ homePage }) => {
  7  |         await homePage.navigate("https://tutorialsninja.com/demo")
  8  |         await homePage.clickMyAcc()
  9  |         await homePage.clickReg()
  10 |     })
  11 | 
  12 |     test("Register @smoke", async ({ registerPage }) => {
  13 |         await registerPage.fillForm(registerData.fname,registerData.lname,
  14 |             registerData.email,registerData.phone,registerData.password,registerData.confirm)
  15 | 
> 16 |         expect(await registerPage.verifyMsg()).toBeVisible()
     |                                                ^ Error: expect(locator).toBeVisible() failed
  17 |         
  18 |     })
  19 | 
  20 | })
```