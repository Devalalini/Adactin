package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.baseclass.BaseClass;

public class BookingConfirmPage extends BaseClass
{
	public static WebDriver driver;
	
	@FindBy(id = "my_itinerary")
	private WebElement myItinerary;
	
	@FindBy(id = "order_no")
	private WebElement ordernumber;
	
	public BookingConfirmPage(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getMyItinerary() {
		return myItinerary;
	}
	
	public WebElement getOrdernumber() {
		return ordernumber;
	}
}
