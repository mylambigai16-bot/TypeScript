import {test as base} from "@playwright/test"
import { Homepage } from "../Pages/Homepage"
import { CartPage } from "../Pages/Cartpage"

type Fixtures = {
    homePage: Homepage
    cartPage: CartPage
}

export const test = base.extend<Fixtures>({

    homePage: async({page}, use)=>{
        await use(new Homepage(page))
    },

    cartPage: async({page},use)=>{
        await use(new CartPage(page))
    }

})