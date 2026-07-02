# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SearchTest.spec.ts >> Resgistering @smoke >> Register @smoke
- Location: tests\SearchTest.spec.ts:12:9

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import {Page, Locator} from "@playwright/test"
  2  | 
  3  | export class Homepage{
  4  | 
  5  |     readonly page:Page
  6  |     readonly my_acc : Locator
  7  |     readonly registerLink : Locator
  8  |     readonly loginLink : Locator
  9  |     readonly searchBar : Locator
  10 | 
  11 |     constructor(page:Page){
  12 |         this.page = page,
  13 |         this.my_acc = page.locator("a[title='My Account']")
  14 |         this.registerLink = page.getByRole("link",{name: "Register"})
  15 |         this.loginLink = page.getByRole("link",{name:"Login"})
  16 |         this.searchBar = page.locator("input[name='search']")
  17 |     }
  18 | 
  19 |     async navigate(url:string){
> 20 |         await this.page.goto(url)
     |                         ^ Error: page.goto: url: expected string, got undefined
  21 |     }
  22 | 
  23 |     async clickMyAcc(){
  24 |         await this.my_acc.click()
  25 |     }
  26 | 
  27 |     async clickReg(){
  28 |         await this.registerLink.click()
  29 |     }
  30 | 
  31 |     async clickLogin(){
  32 |         await this.loginLink.click()
  33 |     }
  34 | 
  35 |     async searching(searchPro:string){
  36 |         await this.searchBar.fill(searchPro)
  37 |     }
  38 | }
  39 | 
  40 | 
  41 | 
  42 | 
```