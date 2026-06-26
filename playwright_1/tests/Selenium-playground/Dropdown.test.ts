import {test,expect} from'@playwright/test'

test("drop down",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/",{waitUntil:"networkidle"})

    await page.locator("#select-demo").click()
    await page.selectOption("#select-demo",{value:"Sunday"})

    //await page.locator("#multi-select").click()
    await page.selectOption("#multi-select",[{value:"Florida"},{label:"California"},{index:3}])
})