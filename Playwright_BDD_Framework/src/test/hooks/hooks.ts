import { Browser } from 'playwright';
import{Before,After,BeforeAll,AfterAll} from "@cucumber/cucumber"
import {chromium} from 'playwright'
import {CustomWorld} from '../world/customWorld'
import {logger} from '../utils/Logger'

let browserName:any;

BeforeAll(async ()=>{
    logger.info("Browser starting....")
    browserName = await chromium.launch({headless:false})
})

Before(async function(this:CustomWorld,scanrio){
    this.browser = browserName
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
})

After(async function(this:CustomWorld,scanrio){
    if(scanrio.result?.status === "FAILED"){
        const path = `report/screenshots/${Date.now()}.png`
        await this.page.screenshot({path})
        logger.error((`Scenario FAILED: ${scanrio.pickle.name}`));
        logger.error(`Screenshot saved: ${path}`)
    }
    else{
        logger.info(`Scanrio PASSED: ${scanrio.pickle.name}`)
    }
    await this.page.close()
    await this.context.close()
})

AfterAll(async()=>{
    logger.info("Closing Browser...!")
    await browserName.close()

})