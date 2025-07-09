const { expect } = require('@playwright/test');


class AllUiInteractions{
    constructor(page){
        this.page=page;
    }


    async clickOnElement(locator){
        await this.page.locator(`${locator}`).waitFor({ state: 'visible', timeout: 10000 });

        await this.page.locator(`${locator}`).click();
    }

    async verifyElementIsVisible(locator){
        const element = this.page.locator(`${locator}`);
        await element.waitFor({ state: 'visible', timeout: 10000 });
        await expect(element).toBeVisible();
    }

    

    
 

}module.exports = { AllUiInteractions };