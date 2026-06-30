import {expect , test} from "@playwright/test"

test.beforeEach("Before test",()=>{
    console.log("Test started...")
})

test("Login @smoke @regression @first", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("admin")
    await page.locator("#loginpassword").fill("admin")
    await page.getByRole("button",{name:"Log in"}).click()

    await expect.soft(page.locator("#nameofuser")).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome admin")

})

test("Login1 @smoke @second", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("admin")
    await page.locator("#loginpassword").fill("admin")
    await page.getByRole("button",{name:"Log in"}).click()

    await expect.soft(page.locator("#nameofuser")).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome admin")

})

test("Login2 @smoke @regression @third", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("admin")
    await page.locator("#loginpassword").fill("admin")
    await page.getByRole("button",{name:"Log in"}).click()

    await expect.soft(page.locator("#nameofuser")).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome admin")

})

test.afterEach("After test", async({page},testInfo)=>{

    console.log("Title: ",testInfo.title)
    console.log("Status: ",testInfo.status)
    console.log("Duration: ",testInfo.duration)
    console.log("Retry: ",testInfo.retry)
    console.log("Output Directory: ",testInfo.outputDir)
    console.log("Tag: ",testInfo.tags)
    console.log("Timeout: ",testInfo.timeout)
    //console.log("Project: ",testInfo.project)
    //console.log("Configurations used: ",testInfo.config)
     if (testInfo.status === "failed") {
        await page.screenshot({path: `tests/screenshots/${testInfo.title}.png`});
    }

})