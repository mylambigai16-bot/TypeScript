import {test as myTest,expect} from '@playwright/test'

myTest("Window Handling", async({page, context})=>{
    await page.goto("https://demoqa.com/browser-windows")

    console.log("Current url: "+page.url)

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await newWindow.waitForLoadState("domcontentloaded")
    console.log(newWindow.url())

    const heading = newWindow.locator("#sampleHeading").textContent()
    console.log("Heading: "+heading)

    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a sample page")

    await newWindow.close()

    console.log("First window url: "+page.url())
})