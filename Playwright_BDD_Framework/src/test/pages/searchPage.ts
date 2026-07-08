import { BasePage } from '../pages/basePage'

export class SearchPage extends BasePage {

    private searchBox = 'input[name="search"]'
    private searchButton = '//button[contains(@class,"btn-default")]'

    private productResult = '//div[@class="product-thumb"]//h4/a'

    private noProductMessage = '//p[contains(text(),"There is no product that matches the search criteria")]'

    async enterProduct(product: string) {
        await this.type(this.searchBox, product);
    }

    async clickSearch() {
        await this.click(this.searchButton);
    }

    async getProductResult() {
        return this.page.locator(this.productResult);
    }

    async getNoProductMessage() {
        return this.page.locator(this.noProductMessage);
    }
}