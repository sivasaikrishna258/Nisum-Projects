package org.Amazon.Pages;

import org.Amazon.Base.BaseClass;
import org.Utitlities.UtilClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class ProductPage {
    WebDriver driver;
    @FindBy(xpath="(//input[@id='add-to-cart-button'])[2]")
    WebElement addToCart;



    @FindBy(xpath = "//input[@aria-labelledby='attach-sidesheet-view-cart-button-announce']")
    WebElement cart;

    @FindBy(xpath = "//h1[@class='a-size-medium-plus a-spacing-small']")
            WebElement Signin;

    public ProductPage(WebDriver driver){
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }

    public CartPage clickOnAddToCartButton()  {
        Set<String> allTabs = driver.getWindowHandles();
        List<String> windows=new ArrayList<>(allTabs);
        String childWindow=windows.get(1);
        driver.switchTo().window(childWindow);

        UtilClass.clickOn(driver,addToCart,30);

        UtilClass.clickOn(driver,cart,30);

        return new CartPage(driver);

    }

}
