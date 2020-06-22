package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.baseclass.BaseClass;

public class SelectHotel extends BaseClass{
	public static WebDriver driver;
	
	@FindBy(id="radiobutton_0")
	private WebElement radioBtn;
	
	@FindBy(id="continue")
	private WebElement proceed;
	
	public SelectHotel(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	
	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getRadioBtn() {
		return radioBtn;
	}

	public WebElement getProceed() {
		return proceed;
	}
}
