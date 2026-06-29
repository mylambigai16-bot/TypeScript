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
    await page.locator("form[action='/signup']").getByPlaceholder("Email Address").pressSequentially("mailu@gmail.com")
    await page.locator("button[data-qa='signup-button']").click()

    await expect(page.locator("//div[@class='login-form']/h2")).toBeVisible();
    await page.locator("#id_gender2").check()
    await page.getByLabel("Password").fill("123456")
    await page.locator("#days").selectOption("16")
    await page.locator("#months").selectOption("May")
    await page.locator("#years").selectOption("2005")
    await page.getByLabel("Sign up for our newsletter!").click()

    await page.getByLabel("First name ").fill("Mugan")
    await page.getByLabel("Last name ").fill("M")
    await page.locator("input[id='address1']").fill("115/2,KN patty,Salem")
    await page.locator("#country").selectOption("India")
    await page.locator("#state").fill("Tamil nadu")
    await page.getByLabel("city ").fill("Salem")
    await page.locator("input[id='zipcode']").fill("636008")
    await page.getByLabel("Mobile Number ").fill("7410852963")

    await page.getByRole("button",{name:"Create Account"}).click()
    await expect(page.locator("//b[text()='Account Created!']")).toHaveText("Account Created!")
    await page.locator(".btn.btn-primary").click()

    await expect(page.locator("(//ul[@class='nav navbar-nav']//child::a)[10]")).toHaveText("Logged in as mailu")
    await page.getByRole('link',{name:" Delete Account"}).click()
    
    await expect(page.locator("//b[text()='Account Deleted!']")).toHaveText("Account Deleted!")
    await page.locator(".btn.btn-primary").click()

    await expect(page).toHaveURL("https://automationexercise.com/")
})