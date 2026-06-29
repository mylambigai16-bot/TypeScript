import {chromium,test,expect} from "@playwright/test"

test("Web element commands",async()=>{
    const browser = await chromium.launch()
    const context =  await browser.newContext()
    const page =  await context.newPage()

    await page.goto("http://automationexercise.com")
   
    await expect(page.getByRole("link",{name:" Home"})).toHaveText(' Home');

    await page.locator(".fa-lock").click()
    await expect(page.locator("//div[@class='signup-form']/h2")).toHaveText("New User Signup!")
    await page.getByPlaceholder("Name").fill("mailu")
    await page.locator("form[action='/signup']").getByPlaceholder("Email Address").pressSequentially("mugan@gmail.com")
    await page.locator("button[data-qa='signup-button']").click()

    await expect(page.locator("//p[text()='Email Address already exist!']")).toBeVisible()
})