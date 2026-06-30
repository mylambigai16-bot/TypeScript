import {Page, Locator} from "@playwright/test"

export class DashboardPage{
    readonly page:Page;
    readonly dashboard: Locator
    readonly quickLaunch: Locator
    readonly timeAtWorkCard: Locator
    readonly profileMenu: Locator
    readonly logoutLink: Locator

    constructor(page: Page){
        this.page = page
        this.dashboard = page.locator("//h6[text()='Dashboard']")
        this.quickLaunch = page.locator("//p[text()='Quick Launch']")
        this.timeAtWorkCard = page.locator("//p[text()='Time at Work']")
        this.profileMenu = page.locator(".oxd-userdropdown-name")
        this.logoutLink = page.locator("//a[text()='Logout']")

    }

    async dashboardPage(){
        return this.dashboard.textContent({timeout:1000});
    }

    async quickLaunchDisplay(){
        return this.timeAtWorkCard.textContent()
    }

    async timeAtWorkCardDisplay(){
        return this.timeAtWorkCard.textContent()
    }

    async logOut(){
        await this.profileMenu.click()
        await this.logoutLink.click()
    }

}