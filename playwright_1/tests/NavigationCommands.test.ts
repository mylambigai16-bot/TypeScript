import {chromium ,test} from "@playwright/test"

test("Navigation_Commands",async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.waitForTimeout(2000)
    await page.goto("https://www.google.co.in/")

    await page.waitForTimeout(2000)
    await page.goto("https://www.flipkart.com/")

    await page.goForward()
    await page.waitForTimeout(2000)

    await page.goBack()
    await page.waitForTimeout(2000)

    await page.reload()
    await page.waitForTimeout(2000)

    await page.close()

})