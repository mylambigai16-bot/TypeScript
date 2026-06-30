import {expect ,test} from "@playwright/test"
import loginData from "../../testData/loginData.json" with { type: "json" }


interface LoginData{
    testName: string,
    username: string;
    password: string,
    expectedResult: "Success"|"Failure",
    expectedMessage: string
}

const user = loginData as LoginData[]
for(const data of user){

    test(`${data.testName}` , async({page})=>{
        await page.goto("https://www.demoblaze.com/index.html")
        await page.locator("#login2").click()
        await page.locator("#loginusername").fill(`${data.username}`)
        await page.locator("#loginpassword").fill(`${data.password}`)

        if(data.expectedResult === "Failure")
             page.on("dialog", async(dialog)=>{
                console.log(dialog.message())
                await dialog.accept()
        })
        await page.click("button[onclick='logIn()']")
            
        if(data.expectedResult === "Success"){
            await page.waitForTimeout(5000)
            await expect(page.locator("#nameofuser")).toBeVisible()
                await expect(page.locator("#nameofuser")).toContainText(`Welcom ${data.username}`)
        }
    })
}