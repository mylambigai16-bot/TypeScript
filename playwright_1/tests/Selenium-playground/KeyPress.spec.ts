import {test,expect } from "@playwright/test"

test.beforeEach("Before test",()=>{
    console.log("Test started...")
})

test("Key press", async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/key-press/", {waitUntil:"domcontentloaded"})
    const input =  page.locator("#my_field")
    await input.click()
    await input.focus()
    await expect(input).toBeFocused();

    await input.press("Enter");
    await input.pressSequentially("Hello")
    await expect(input).toBeFocused();
    await page.keyboard.press("Enter")

    await expect(page.locator("p[id='result']")).toContainText("ENTER")
})