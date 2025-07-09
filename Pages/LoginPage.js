const { AllUiInteractions } = require("./Utils/UI_Interactions");



class loginPage extends AllUiInteractions {

    constructor(page) {
        super(page); `                                           `
        this.page = page;
    }

    async login(url) {

        await this.page.goto(url,
            {
                waitUntil: "domcontentloaded",
                timeout: 15000
            },
        );
    }



} module.exports = { loginPage };