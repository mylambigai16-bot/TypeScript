import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/customWorld";

Given('User enters {string} in the search field', async function (this: CustomWorld,pro:string) {
  await this.searchPage.enterProduct(pro)
});

When('User clicks the search button', async function (this: CustomWorld) {
  await this.searchPage.clickSearch()
});

Then('User should see searched {string} in the search results', async function (this: CustomWorld,produntName:string) {
  const proList = await this.searchPage.getProductResult()
  const listOfProduct = await proList.allInnerTexts()
  for(var pro of listOfProduct){
    expect(await pro).toContain(produntName)
  }
});

Given('User enters {string} name in the search field', async function (this: CustomWorld,invalodPro:string) {
  await this.searchPage.enterProduct(invalodPro)
});

Then('User should see no products found message', async function (this: CustomWorld) {
  await expect(await this.searchPage.getNoProductMessage()).toHaveText("There is no product that matches the search criteria.")
});