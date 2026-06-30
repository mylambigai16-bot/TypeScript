import {expect,test} from "@playwright/test"

test.beforeEach("Before test", async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/radiobutton-demo/")
    console.log("Navigate to Radio-button page")
})

test("Radio button", async({page})=>{

    const button = page.locator("(//input[@value='Female'])[1]")
    await expect(button).toBeEnabled()
    await button.check()
    await expect(button).not.toBeChecked();
    await button.check()
    await page.locator("#buttoncheck").click()
    await expect(page.locator("//button[@id='buttoncheck']/following-sibling::p")).toContainText("Female")
    const button1 = page.locator("input[value='RadioButton1']")
    await expect(button1).toBeEnabled()
    await button1.check()
    

    const button2 = page.locator("input[value='RadioButton2']")
    await expect(await button2).toBeEnabled()
    await button2.check()

    const button3 = page.locator("input[value='RadioButton3']")
    await expect(await button3).toBeDisabled()

    await page.locator("//label[text()='Female']//input[@name='gender']").check()
    await page.locator("//label[text()='15 to 50']//input[@name='ageGroup']").check()

    await page.getByRole("button",{name:"Get values"}).click()

    await expect(await page.locator(".mb-20.font-medium")).toContainText("Female")
    await expect(await page.locator("//p[@class='mb-20 font-medium']/following-sibling::p")).toContainText("Age : 15 - 50")


})