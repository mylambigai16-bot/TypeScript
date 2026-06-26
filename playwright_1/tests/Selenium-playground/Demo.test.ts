import {chromium, test} from '@playwright/test'

test("Demo", async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
    const url = await page.url()
    console.log("URL: "+url)
    const title = await page.title()
    console.log("Title: "+title)

    const placeHolder_con = await page.getByPlaceholder("Please enter your Message")
    
    console.log("Placeholder value: "+placeHolder_con.getAttribute("placeholder"))

    await page.locator("#showInput").click()
    const name = await page.locator("p[id='message']").textContent()
    console.log("Before entering: "+name)

    await page.locator("input[id='user-message']").fill("myl")
    await page.locator("#showInput").click()
    const name1 = await page.locator("p[id='message']").textContent()
    console.log("After entering: "+name1)
})