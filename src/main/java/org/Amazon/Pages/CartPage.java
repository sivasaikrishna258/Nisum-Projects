package org.Amazon.Pages;

import org.Amazon.Base.BaseClass;
import org.Utitlities.UtilClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage  {
    WebDriver driver;
    @FindBy(xpath = "//input[@name='proceedToRetailCheckout']")
    WebElement checkout;


   public CartPage(WebDriver driver) {
       this.driver=driver;
        PageFactory.initElements(driver, this);
    }

    public void clickOnCheckoutButton() {

        UtilClass.clickOn(driver, checkout, 30);
        System.out.println(driver.getTitle());
//        driver.quit();
    }
}
