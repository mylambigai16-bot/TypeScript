import { DashboardPage } from './../pages/DashboardPage.ts';
import { LoginPage } from './../pages/LoginPage.ts';
import {test as base} from "@playwright/test"

type Fixtures = {

    LoginPage:LoginPage;
    DashboardPage:DashboardPage

}

export const test = base.extend<Fixtures>({
    
    LoginPage: async ({page},use)=>{
        await use(new LoginPage(page))
    },

    DashboardPage: async ({page},use)=>{
        await use(new DashboardPage(page))
    }


})
