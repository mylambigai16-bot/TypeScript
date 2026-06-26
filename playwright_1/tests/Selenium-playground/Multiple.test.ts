import {test as myTest,expect} from '@playwright/test'

myTest("Window Handling", async({page, context})=>{
    await page.goto("https://demoqa.com/browser-windows",{waitUntil:"networkidle"})

    console.log("Current url: "+page.url)

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState("domcontentloaded")

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await window.waitForLoadState()

    const pages = context.pages() 
    for(const p of pages){
        console.log("-------------")
        console.log("URL: "+p.url())
        console.log("Title: "+p.title())
    }
})

myTest("Iterate window Attribute", async({page, context})=>{
    await page.goto("https://demoqa.com/browser-windows",{waitUntil:"networkidle"})

    console.log("Current url: "+page.url)

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState("domcontentloaded")

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await window.waitForLoadState()

    const pages = context.pages()

    console.log("Number of pages:  "+pages.length)

    for(const p of pages){
        console.log("-------------")
        console.log("URL: "+p.url())
        if(p.url().includes("sample")){
        console.log("Heading: "+p.locator("#sampleHeading").textContent())
        }
    }
})