import{chromium,test} from '@playwright/test'

test("login",async() =>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com/")
    await page.click("//a[@id='login2']")
    await page.fill("//input[@id='loginusername']","admin")
    await page.fill("//input[@id='loginpassword']","admin")
    await page.click("//button[text()='Log in']")
    await page.waitForTimeout(5000)

    // const page1 = await context.newPage()
    // await page1.goto("https://www.demoblaze.com/cart.html")

    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://www.demoblaze.com/cart.html")
    await page.waitForTimeout(5000)

    await newPage.close()

    const title_ = await page.title();
    console.log(title_)

    const url =  page.url()
    console.log(url)

    // const content = await page.content()
    // console.log(content)

    await browser.close()

})
