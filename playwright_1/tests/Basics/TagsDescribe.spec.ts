import {expect , test} from "@playwright/test"

test.describe("Login module @smoke", ()=>{
    
    test("Login", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("admin")
    await page.locator("#loginpassword").fill("admin")
    await page.getByRole("button",{name:"Log in"}).click()

    await expect.soft(page.getByRole("link",{name:"Home "})).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome admin")

})
 
test("Login1", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("admin")
    await page.locator("#loginpassword").fill("admin")
    await page.getByRole("button",{name:"Log in"}).click()

    await expect.soft(page.getByRole("link",{name:"Home "})).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome admin")

})
})


test("Login2 @valid", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("admin")
    await page.locator("#loginpassword").fill("admin")
    await page.getByRole("button",{name:"Log in"}).click()

    await expect.soft(page.getByRole("link",{name:"Home "})).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome admin")

})