import {Page, Locator} from "@playwright/test"

export class SearchPage{
    readonly page: Page
    
    constructor(page: Page){
        this.page = page
        
    }

    async login(email:string, password: string){
        
    }

}