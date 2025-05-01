package com.Amazon.StepDefinitions;

import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import org.Amazon.Base.BaseClass;
import org.Amazon.Pages.CartPage;
import org.Amazon.Pages.HomePage;
import org.Amazon.Pages.ProductPage;
import org.openqa.selenium.WebDriver;

public class CartPageTest extends BaseClass {


    HomePage homePage;
    ProductPage productPage;
    CartPage cartPage;

   public CartPageTest(){
        homePage=new HomePage(driver);
//      productPage=new ProductPage(driver);
    }

    @Given("User have added products to the cart")
    public void user_have_added_products_to_the_cart() {
       productPage= homePage.enterTextIntoSearchBoxAndClickOnAnyProduct("iphone");
        cartPage=productPage.clickOnAddToCartButton();
    }

    @When("User view the contents of the cart")
    public void user_view_the_contents_of_the_cart() {

    }

    @Then("User should see the proceed to checkout button")
    public void user_should_see_the_proceed_to_checkout_button() {

        cartPage.clickOnCheckoutButton();
    }


}
