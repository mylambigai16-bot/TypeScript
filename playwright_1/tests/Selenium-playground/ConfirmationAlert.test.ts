import {test, expect} from '@playwright/test'

test("alerts",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{waitUntil:"networkidle"})

    page.on("dialog",async(alert)=>{
        console.log(await alert.message())
        await alert.dismiss()
    })

    await page.locator("(//button[text()='Click Me'])[2]").click()
    await expect(page.locator("#confirm-demo")).toHaveText("You pressed Cancel!")
    
})