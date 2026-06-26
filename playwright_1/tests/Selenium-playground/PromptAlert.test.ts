import {test, expect} from '@playwright/test'

test("alerts",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{waitUntil:"networkidle"})

    page.on("dialog",async(alert)=>{
        console.log(await alert.defaultValue())
        await alert.accept("myl")
    })

    await page.locator("(//button[text()='Click Me'])[3]").click()
    await expect(page.locator("prompt-demo")).toContainText("myl")
    
})