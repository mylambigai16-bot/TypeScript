import {expect, test,TestInfo} from "@playwright/test"

test.beforeEach("Before test", ()=>{
    console.log("Test started..,")
})

test("Dragto @Valid", async({page})=>{

    await page.goto("https://www.leafground.com/drag.xhtml;jsessionid=node019m5ukkb28bzr6enl3lb32ok919715263.node0")
    const source =  page.locator("div[id='form:drag']")
    const dest =  page.locator("div[id='form:drop_content']")
    await source.dragTo(dest)

    const dropped = await page.locator("#form\\:drop_content")
    //const backgroundColor = await dropped.evaluate(el =>getComputedStyle(el).backgroundColor)
    await expect(dropped).toHaveCSS("background-color","rgb(0, 113, 188)");
})  

test.afterEach("After test", async({page},testInfo)=>{

    console.log("Title: ",testInfo.title)
    console.log("Status: ",testInfo.status)
    console.log("Duration: ",testInfo.duration)
    console.log("Retry: ",testInfo.retry)
    console.log("Output Directory: ",testInfo.outputDir)
    console.log("Tag: ",testInfo.tags)
    console.log("Timeout: ",testInfo.timeout)
    console.log("Project: ",testInfo.project)
    console.log("Configurations used: ",testInfo.config)
     if (testInfo.status === "failed") {
        await page.screenshot({path: `tests/screenshots/${testInfo.title}.png`});
    }

})