import {chromium,test,expect} from "@playwright/test"

test("Web element commands",async()=>{
    test.setTimeout(70_000);
    const browser = await chromium.launch()
    const context =  await browser.newContext()
    const page =  await context.newPage()

    await page.goto("http://automationexercise.com")
   
    await expect(page.getByRole("link",{name:" Home"})).toHaveText(' Home');

    await page.locator(".fa-lock").click()
    await expect(page.locator("//div[@class='login-form']/h2")).toBeVisible()

    await page.locator("input[data-qa='login-email']").fill("mugan@gmail.com")
    await page.locator("input[data-qa='login-password']").fill("123")

    await page.locator("button[data-qa='login-button']").click() 
    await expect(page.locator("//p[text()='Your email or password is incorrect!']")).toBeVisible()
})