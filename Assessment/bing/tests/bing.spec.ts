import {test, expect} from '@playwright/test'

test.describe("FireFox", ()=>{
    test.beforeEach("Before test", async({page})=>{
        await page.goto("https://www.bing.com/")
    })

    test("launching bing",async({page})=>{
        const title = await page.title()
        const url = page.url()
        
        expect(title).toContain("Search - Microsoft Bing")
        expect(url).toBe("https://www.bing.com/")

        const copiletInnerText = await page.locator("//div[text()='Copilot']").innerText()
        const searchbar =  page.locator("//textarea[@id='sb_form_q']")
        const attribute = await searchbar.getAttribute("aria-label")
        console.log(attribute)
         
       // const search = page.locator("textarea[id='sb_form_q']");

        await searchbar.pressSequentially("playwright")
        await page.keyboard.press("Enter")

        await page.locator("(//div[@class='b_tpcn'])[1]").click()

        expect(await page.title()).toContain("playwright")
    })
})