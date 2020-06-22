package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.baseclass.BaseClass;

public class BookingHotel extends BaseClass
{
	public static WebDriver driver;
	
	@FindBy(xpath="(//input[@type='text'])[11]")
	private WebElement firstName;
	
	@FindBy(xpath = "(//input[@type='text'])[12]")
	private WebElement lastName;
	
	@FindBy(id = "address")
	private WebElement address;

	@FindBy(xpath = "(//input[@type='text'])[13]")
	private WebElement creditCard;
	
	@FindBy(id = "cc_type")
	private WebElement creditType;
	
	@FindBy(id = "cc_exp_month")
	private WebElement month;
	
	@FindBy(id = "cc_exp_year")
	private WebElement year;
	
	@FindBy(xpath="(//input[@type='text'])[14]")
	private WebElement ccv;
	
	@FindBy(id = "book_now")
	private WebElement booknow;
	
	public BookingHotel(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getFirstName() {
		return firstName;
	}

	public WebElement getLastName() {
		return lastName;
	}

	public WebElement getAddress() {
		return address;
	}
	
	public WebElement getCreditCard() {
		return creditCard;
	}

	public WebElement getCreditType() {
		return creditType;
	}

	public WebElement getMonth() {
		return month;
	}

	public WebElement getYear() {
		return year;
	}

	public WebElement getCcv() {
		return ccv;
	}

	public WebElement getBooknow() {
		return booknow;
	}
}
