import { test as myTest, expect } from "@playwright/test";

myTest("Window Handling", async ({ page, context }) => {

    myTest.setTimeout(60000);

    await page.goto("https://demoqa.com/browser-windows");

    console.log("Current url: " + page.url());

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState();

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await window.waitForLoadState();

    const pages = context.pages();

    for (const p of pages) {
        console.log("----------------");
        console.log("URL: " + p.url());
        console.log("Title: " + await p.title());
    }
});

myTest("Iterate window Attribute", async ({ page, context }) => {

    await page.goto("https://demoqa.com/browser-windows");

    console.log("Current url: " + page.url());

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState();

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await window.waitForLoadState();

    const pages = context.pages();

    console.log("Number of pages: " + pages.length);

    for (const p of pages) {
        console.log("----------------");
        console.log("URL: " + p.url());

        if (p.url().includes("sample")) {
            console.log(
                "Heading: " +
                await p.locator("#sampleHeading").textContent()
            );
        }
    }
});