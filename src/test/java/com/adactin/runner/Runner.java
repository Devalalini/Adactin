package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.utility.FileReaderManager;
import com.cucumber.baseclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src//test//java//com//adactin//feature//Adactin.feature",
                 glue="com\\adactin\\stepdefinition" , //                 tags= {"@Login"},
                 monochrome = true,                 dryRun = false,                 strict = true,
                 plugin= {"html:Report\\CucumberReport","json:Report\\CucumberReport.json",
                		 "com.cucumber.listener.ExtentCucumberFormatter:Report\\extentReport.html"})

public class Runner extends BaseClass {
	public static WebDriver driver;
	
	@BeforeClass
	public static void browserOpen() throws IOException {
		String browserName = FileReaderManager.getInstance().getCRInstance().getBrowserName();
		driver=BrowserLaunch(browserName);
	}
	
	@AfterClass
	public static void browserClose() {
		driver.close();
	}
	
	
}
