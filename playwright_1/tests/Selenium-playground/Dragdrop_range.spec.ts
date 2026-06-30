import {expect , test} from "@playwright/test"

test("Drog drop", async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/")

    const slider = page.locator("(//input[@class='sp__range'])[1]");

    const box = await slider.boundingBox();

if (!box) {
    throw new Error("Slider is not visible");
}

    
    await page.mouse.move(
        box.x + box.width / 2,
        box.y + box.height / 2);

    await page.mouse.down();

    await page.mouse.move(
        box.x + box.width / 2 - 100,
        box.y + box.height / 2,
        { steps: 20 });

    await page.mouse.up();
}

)