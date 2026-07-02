import {Before, After,Status} from "@cucumber/cucumber"
import {chromium, Browser, Page} from "@playwright/test"
//import { pageFixture } from "./pageFixture"
import {CustomWorld}  from "./world"


let browser: Browser
// Before(async function(){
//     browser = await chromium.launch({headless:false})
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     pageFixture.page = page
// });

// After(async function(){
//     await pageFixture.page.close();
//     await browser.close()
// })

Before(async function(this: CustomWorld){

    this.browser = await chromium.launch({headless:false})
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()

})

After(async function(this: CustomWorld,{pickle,result}){
    console.log(result?.status)
    if(result?.status == Status.FAILED){
        const img = await this.page.screenshot({path: `./test-results/screenshot/${pickle.name}.png         `, type:"png"})
        await this.attach(img, "image/png")
    }

    this.page.close()
    this.context.close()
    this.browser.close()
})