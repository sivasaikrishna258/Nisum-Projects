package org.Amazon.Pages;

import com.fasterxml.jackson.databind.ser.Serializers;
import org.Amazon.Base.BaseClass;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage  {
    WebDriver driver;
    @FindBy(id="twotabsearchtextbox")
    WebElement searchBox;

    @FindBy(xpath = "//span[contains(text(),'Apple iPhone 15 (128 GB) - Blue')]")
    WebElement productLink;

    public HomePage(WebDriver driver) {
        this.driver=driver;
        PageFactory.initElements(driver, this);
    }

    public ProductPage enterTextIntoSearchBoxAndClickOnAnyProduct(String mobile){
        driver.get(BaseClass.property.getProperty("AppURL"));
        searchBox.sendKeys(mobile+ Keys.ENTER);
        productLink.click();

        return new ProductPage(driver);
    }


}
