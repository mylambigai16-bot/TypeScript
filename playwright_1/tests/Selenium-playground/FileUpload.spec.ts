import {expect,test} from "@playwright/test"

test.beforeEach("Bofore Test", ()=>{
    console.log("Launching the browser...")
})

test("File upload", async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/upload-file-demo/")
    await page.locator("input[id='file']").setInputFiles("./tests/Selenium-playground/empty.pdf")
    const file_uploded = await page.locator("div[id='error']")
    console.log(await file_uploded.textContent())
    await expect(page.locator("div[id='error']")).toContainText("File Successfully Uploaded");
    

})