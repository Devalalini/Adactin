package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.baseclass.BaseClass;

public class LogoutPage extends BaseClass {
	public static WebDriver driver;
	
	@FindBy(id = "logout")
	private WebElement logout;
	
	public LogoutPage(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getLogout() {
		return logout;
	}
	

}
