const { HomePage } = require("./HomePage");
const { loginPage } = require("./LoginPage");
const { SignUpPage } = require("./SignUpPage");
const { AllUiInteractions } = require("./Utils/UI_Interactions");

class PageObjects{

    constructor(page){
        this.page=page;

        //utilities
        this.uiInteractions=new AllUiInteractions(this.page);
        //add new page when create 
        this.loginPage=new loginPage(this.page);
        this.signUpPage=new SignUpPage(this.page);
        this.homePage=new HomePage(this.page);
    }

    getLogin(){
        return this.loginPage;
    }

    getUI_Interactions(){
        return this.uiInteractions;
    }

    getSignUpPage(){
        return this.signUpPage;
    }

    getHomePage(){
        return this.homePage;
    }


}module.exports = { PageObjects };