package com.Amazon.StepDefinitions;

import AppHooks.ApplicationHooks;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import org.Amazon.Base.BaseClass;
import org.Amazon.Pages.HomePage;
import org.Amazon.Pages.ProductPage;
import org.openqa.selenium.WebDriver;

import static org.Amazon.Base.BaseClass.property;

public class HomePageTest extends BaseClass {
    HomePage homePage;
    public HomePageTest(){
        homePage=new HomePage(driver);
    }



    @Given("I am on the homepage")
    public void i_am_on_the_homepage() {
        driver.get(property.getProperty("AppURL"));
    }

    @When("I search for {string}")
    public void i_search_for(String Mobile) {
       homePage.enterTextIntoSearchBoxAndClickOnAnyProduct(Mobile);
    }

    @Then("I should see search results related to {string}")
    public void i_should_see_search_results_related_to(String string) {
        System.out.println(string);
    }


}
