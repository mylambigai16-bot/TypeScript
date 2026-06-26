import { chromium,test,expect } from "@playwright/test";

test("Sum", async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/",{waitUntil:"networkidle"})
    test.setTimeout(60000)
    // const val1:string = '5'
    // const val2:string = '2'
    //const sum:number = Number(val1) + Number(val2)
    const ele = page.locator("#sum1")
    await ele.scrollIntoViewIfNeeded()
    await ele.click()
    await page.locator("#sum1").press(`${'1'}`)
    await page.locator("#sum2").pressSequentially("2")

    await page.locator("//button[text()='Get Sum']").click();

    await page.locator("#addmessage").isVisible();
    await expect(page.locator("#addmessage")).toHaveText("3")

})