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
    - waiting for" https://the-internet.herokuapp.com/login" navigation to finish...
    - navigated to "https://the-internet.herokuapp.com/login"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - text:  Your username is invalid!
    - link "×" [ref=e5] [cursor=pointer]:
      - /url: "#"
  - generic [ref=e6]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e7] [cursor=pointer]
    - generic [ref=e9]:
      - heading "Login Page" [level=2] [ref=e10]
      - heading "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages." [level=4] [ref=e11]:
        - text: This is where you can log into the secure area. Enter
        - emphasis [ref=e12]: tomsmith
        - text: for the username and
        - emphasis [ref=e13]: SuperSecretPassword!
        - text: for the password. If the information is wrong you should see error messages.
      - generic [ref=e14]:
        - generic [ref=e16]:
          - generic [ref=e17] [cursor=pointer]: Username
          - textbox "Username" [ref=e18]
        - generic [ref=e20]:
          - generic [ref=e21] [cursor=pointer]: Password
          - textbox "Password" [ref=e22]
        - button " Login" [ref=e23] [cursor=pointer]:
          - generic [ref=e24]:  Login
  - generic [ref=e26]:
    - separator [ref=e27]
    - generic [ref=e28]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e29] [cursor=pointer]:
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