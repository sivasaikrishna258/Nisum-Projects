package AppHooks;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.Amazon.Base.BaseClass;
import org.Amazon.Pages.HomePage;
import org.openqa.selenium.WebDriver;

import java.util.Properties;

public class ApplicationHooks {
   public static WebDriver driver ;

    @Before
    public void setUp(){

        Properties prop = BaseClass.getProp();
        driver = BaseClass.getDriver(prop.getProperty("driverType"));

    }

    @After
    public void tearDown(){
        driver.quit();
    }
}
