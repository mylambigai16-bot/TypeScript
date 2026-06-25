# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.test.ts >> login test
- Location: tests\loginTest.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.flash.success')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.flash.success')
    2 × waiting for" https://the-internet.herokuapp.com/login" navigation to finish...
      - navigated to "https://the-internet.herokuapp.com/login"

```

```yaml
- text:  Your username is invalid!
- link "×":
  - /url: "#"
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "Login Page" [level=2]
- heading "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages." [level=4]:
  - text: This is where you can log into the secure area. Enter
  - emphasis: tomsmith
  - text: for the username and
  - emphasis: SuperSecretPassword!
  - text: for the password. If the information is wrong you should see error messages.
- text: Username
- textbox "Username"
- text: Password
- textbox "Password"
- button " Login"
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import  {test, expect} from "@playwright/test"
  2  | 
  3  | test('login test',async({page}) => {
  4  |     
  5  |      page.goto(process.env.BASE_URL!);
  6  | 
  7  |  page.fill('#username',process.env.U_NAME!);
  8  |  page.fill('#password',process.env.PASS_WORD!);
  9  |  page.click('button[type="submit"]');
  10 | 
> 11 | await expect(page.locator('.flash.success')).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  12 | });
```