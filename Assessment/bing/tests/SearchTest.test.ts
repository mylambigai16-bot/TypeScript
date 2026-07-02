import { expect } from '@playwright/test';
import {test} from '../fixtures/basFixture';

test.describe("Searching Product @smoke", () => {

    test.beforeEach("Before Search @smoke", async ({ homePage }) => {
        await homePage.navigate()
    })

    test("search product @smoke", async ({ homePage, searchPage }) => {
        await homePage.searching("MacBook")
        await homePage.clcikSearchIcon()
        const products = await searchPage.listProduct();
        const listP = await products.allInnerTexts();
        for (var pro of listP)
           await expect(pro).toContain("MacBook")
    })

})