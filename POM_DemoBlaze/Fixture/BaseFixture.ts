import {test as base} from "@playwright/test"
import { Homepage } from "../Pages/Homepage.spec"

type Fixtures = {
    homePage: Homepage
}

export const test = base.extend<Fixtures>({

    homePage: async({page}, use)=>{
        await use(new Homepage(page))
    }

})