import {test, expect} from '@playwright/test'

test("Contact us", async({page})=>{
    test.setTimeout(40000)
    await page.goto("https://automationexercise.com/")
    await expect(page.getByRole("link",{name:" Home"})).toHaveText(' Home');

    await page.locator("//a[@href='/test_cases']/i").click()
    expect(page.url()).toContain("test_cases")
})