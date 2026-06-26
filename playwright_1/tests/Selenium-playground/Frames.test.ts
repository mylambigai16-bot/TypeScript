import { test as mytest, expect } from "@playwright/test";

mytest("iframes", async ({ page }) => {

    await page.goto("https://letcode.in/frame", {waitUntil: "networkidle"});

    const frames = page.frames();
    console.log("Frames: " + frames.length);

    const frame = page.frameLocator("iframe[name='firstFr']");

    await frame.locator("input[name='fname']").fill("Mugan");
    await frame.locator("input[name='lname']").fill("M");

    await expect(frame.locator("input[name='fname']")).toHaveValue("Mugan");

    const innerFrame = frame.frameLocator("iframe[src='/innerframe']");

    await innerFrame.locator("input[name='email']").fill("mugan@gmail.com");

});