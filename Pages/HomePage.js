const { AllUiInteractions } = require("./Utils/UI_Interactions");
const { expect } = require('@playwright/test');

class HomePage extends AllUiInteractions {
    constructor(page) {
        super(page);
        this.page = page;

        //elements on homePage

    }
    async verifyHomePageTitle() {
        await expect(await this.page.title()).toContain("Automation Exercise");
        await expect(await this.page.locator(".col-sm-6 h2").nth(0)).toHaveText("Full-Fledged practice website for Automation Engineers");
    }

    async clickOnSignUpButton(webElement) {
        await this.clickOnElement(`text="${webElement}"`);
    }


} module.exports = { HomePage };