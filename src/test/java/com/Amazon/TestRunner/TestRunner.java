package com.Amazon.TestRunner;


import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.File;

@RunWith(io.cucumber.junit.Cucumber.class)
@CucumberOptions(features ={
        "src/main/java/org/Amazon/FeatureFiles/HomePage.feature",
        "src/main/java/org/Amazon/FeatureFiles/Cart.feature",
        "src/main/java/org/Amazon/FeatureFiles/Product.feature"},

        glue={"com/Amazon/StepDefinitions","AppHooks"},
        monochrome = false,
        dryRun = false,
        plugin = {"pretty","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"})
public class TestRunner {

}
