import {expect , test} from "@playwright/test"

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

test.skip("Login2", async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("admin")
    await page.locator("#loginpassword").fill("admin")
    await page.getByRole("button",{name:"Log in"}).click()

    await expect.soft(page.getByRole("link",{name:"Home "})).toBeVisible()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome admin");
})