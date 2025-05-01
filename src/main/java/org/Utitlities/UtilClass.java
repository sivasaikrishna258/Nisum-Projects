package org.Utitlities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class UtilClass {

    public static void clickOn(WebDriver driver1, WebElement element, int timeout){


        new WebDriverWait(driver1,
               timeout).until(ExpectedConditions.visibilityOf(element));

        element.click();
    }
}
