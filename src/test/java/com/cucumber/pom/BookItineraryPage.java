package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.baseclass.BaseClass;

public class BookItineraryPage extends BaseClass {
	public static WebDriver driver;
	
	@FindBy(xpath = "(//input[@type='checkbox'])[2]")
	private WebElement radioBtn;
	
	public BookItineraryPage(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	
	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getRadioBtn() {
		return radioBtn;
	}
}
