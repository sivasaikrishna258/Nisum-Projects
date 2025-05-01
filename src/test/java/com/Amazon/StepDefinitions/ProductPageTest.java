package com.Amazon.StepDefinitions;

import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import org.Amazon.Base.BaseClass;
import org.Amazon.Pages.HomePage;
import org.Amazon.Pages.ProductPage;
import org.openqa.selenium.WebDriver;

public class ProductPageTest extends BaseClass  {



    HomePage homePage;
    ProductPage productPage;

    public ProductPageTest(){

        homePage=new HomePage(driver);
    }


    @Given("User is on the product page of a {string}")
    public void user_is_on_the_product_page_of_a(String Mobile) {
       productPage=homePage.enterTextIntoSearchBoxAndClickOnAnyProduct(Mobile);
    }
    @When("User can add the product to the cart")
    public void user_can_add_the_product_to_the_cart() {

        productPage.clickOnAddToCartButton();
    }
    @Then("the product should be added successfully to the cart")
    public void the_product_should_be_added_successfully_to_the_cart() {

    }

}
