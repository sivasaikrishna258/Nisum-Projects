package org.Amazon.Base;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;


public class BaseClass {

    public static WebDriver driver;
    public static Properties property;


    public static Properties getProp(){
        try {
            FileInputStream file = new FileInputStream("src/Configuration/config.properties");
            property=new Properties();//create instance of properties class
            property.load(file);
        }
        catch (IOException e) {
            e.printStackTrace();
        }

        return property;
    }
//
//    @Before(order = 1)
//    public void setUp(){
//
//        driver = BaseClass.getDriver(property.getProperty("driverType"));
//
//    }
   public static WebDriver getDriver(String driverType){
       try {
            FileInputStream file = new FileInputStream("src/Configuration/config.properties");
            property=new Properties();//create instance of properties class
            property.load(file);
        }
        catch (IOException e) {
            e.printStackTrace();
        }

       if (driverType.equals("chrome")) {
           WebDriverManager.chromedriver().setup();
           driver=new ChromeDriver();
       } else if (driverType.equals("firefox")) {
           WebDriverManager.firefoxdriver().setup();
           driver=new FirefoxDriver();
       } else if (driver.equals("safari")) {
           driver=new SafariDriver();
       } else {
           System.out.println("Please pass the correct browser value: " + driverType);
       }

       driver.manage().deleteAllCookies();
       driver.manage().window().maximize();

       return driver;

   }



//   @After
//    public void quit(){
//        driver.quit();
//   }


}
