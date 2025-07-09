const Module = require("module");
const { AllUiInteractions } = require("./Utils/UI_Interactions");
const { expect } = require('@playwright/test');


class SignUpPage extends AllUiInteractions {
    constructor(page) {
        super(page);
        this.page = page;
    }


    async verifyText(text) {
        await this.verifyElementIsVisible(`text=${text}`);

    }

    async enterData(value, placeholder, keyword) {

        if (placeholder === "Name" || placeholder === "password") {
            await this.page.locator(`input[placeholder='${placeholder}']`).fill(`${value}`);
        } else if (keyword === "Signup") {
            await this.page.locator(`input[placeholder='${placeholder}']`).nth(1).fill(`${value}`);
        } else {
            await this.page.locator(`input[placeholder='${placeholder}']`).nth(0).fill(`${value}`);
        }
    }

    async clickOnButton(button) {
        await this.page.locator(`text='${button}'`).nth(0).click();
    }

    async verifyHeaderText(headerName) {

        await this.page.waitForLoadState("domcontentloaded");
        const header = await this.page.locator('h2', { hasText: headerName });
        header.waitFor();
        await expect(header).toBeVisible();
        await expect(header).toHaveText(headerName);
    }
} module.exports = { SignUpPage }