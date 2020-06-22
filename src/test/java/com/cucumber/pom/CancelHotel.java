package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.baseclass.BaseClass;

public class CancelHotel extends BaseClass
{
	public static WebDriver driver;
	
	@FindBy(xpath = "//input[@value='Cancel Selected']")
	private WebElement cancelHotel;
	
	public CancelHotel(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getCancelHotel() {
		return cancelHotel;
	}

}
