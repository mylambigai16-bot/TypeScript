import {expect, test} from "@playwright/test"

const testData = [{keyword:"selenium",expected:"selenium"},{keyword:"playwright"},{keyword:"cypress"}]

for(const s of testData){
    test(`Search ${s.keyword}`, async({page})=>{

        await page.goto("")
        await page. locator("textarea[name='q']").fill(s.keyword)
        await page.keyboard.press("Enter")

        await page.locator('h3').click()
        await expect(page).toHaveTitle(s.keyword)
    })
}