import {chromium,test,expect} from "@playwright/test"

test("Web element commands",async()=>{
    //test.setTimeout(70_000);
    const browser = await chromium.launch()
    const context =  await browser.newContext()
    const page =  await context.newPage()

    await page.goto("http://automationexercise.com")
   
    await expect(page.getByRole("link",{name:" Home"})).toHaveText(' Home');

    await page.locator(".fa-lock").click()
    await expect(page.locator("//div[@class='login-form']/h2")).toBeVisible()

    await page.locator("input[data-qa='login-email']").fill("mugan@gmail.com")
    await page.locator("input[data-qa='login-password']").fill("123456")

    await page.locator("button[data-qa='login-button']").click()    

    await expect(page.locator("(//ul[@class='nav navbar-nav']//child::a)[10]")).toHaveText("Logged in as Mugan")

    await page.getByRole("link",{name:" Logout"}).click()
    await expect(page.locator("//div[@class='login-form']/h2")).toBeVisible()

})