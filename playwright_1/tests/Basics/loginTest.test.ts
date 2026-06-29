import  {test, expect} from "@playwright/test"

test('login test',async({page}) => {
    
    await page.goto(process.env.BASE_URL!);

await page.fill('#username',process.env.U_NAME!);
await page.fill('#password',process.env.PASS_WORD!);
await page.click('button[type="submit"]');

await expect(page.locator('.flash.success')).toBeVisible();
});