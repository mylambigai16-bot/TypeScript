import {test, expect} from '@playwright/test'

test("Contact us", async({page})=>{
    test.setTimeout(40000)
    await page.goto("https://automationexercise.com/")
    await expect(page.getByRole("link",{name:" Home"})).toHaveText(' Home');

    await page.getByRole("link",{name:" Contact us"}).click()
    await expect(page.getByText("Get In Touch")).toBeVisible()

    await page.locator("input[placeholder='Name']").pressSequentially("Mugan")
    await page.locator("input[placeholder='Email']").pressSequentially("mugan@gamail.com")
    await page.locator("input[placeholder='Subject']").pressSequentially("Subject")
    await page.getByPlaceholder("Your Message Here").pressSequentially("Something")
    await page.locator("input[type='file']").setInputFiles("./tests/AutomationExercise/empty.txt");

    page.on("dialog", async(alert)=>{ 
        console.log(await alert.message()); 
        await alert.accept()})

    await page.locator("input[type='submit']").click()


    const success = await page.locator("div.status.alert.alert-success")
    await expect(success).toBeVisible();
    console.log(success.textContent())
    await expect(page.locator("div.status.alert.alert-success")).toContainText("Success!")
    await page.locator("i.fa.fa-home").click()
    await expect(page.getByRole("link",{name:" Home"})).toHaveText(' Home');


})