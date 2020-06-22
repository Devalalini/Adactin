package com.adactin.runner;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

import com.cucumber.baseclass.BaseClass;
import com.cucumber.pom.BookItineraryPage;
import com.cucumber.pom.BookingConfirmPage;
import com.cucumber.pom.BookingHotel;
import com.cucumber.pom.CancelHotel;
import com.cucumber.pom.LogoutPage;
import com.cucumber.pom.SearchHotel;
import com.cucumber.pom.SelectHotel;
import com.cucumber.pom.SignInPage;

public class AdactinTesting extends BaseClass{
	public static WebDriver driver;
	
	@Test
	public void Sample() throws InterruptedException 
	{
		driver=BrowserLaunch("chrome");
		getURL("http://adactinhotelapp.com/");
		
		SignInPage sp=new SignInPage(driver);
		inputValuestoWebElement(sp.getUsername(), "DevalaliniK");
		inputValuestoWebElement(sp.getPassword(), "Deva@11");
		clickOnWebElement(sp.getLogin());
		
		SearchHotel sh=new SearchHotel(driver);
		selectDropDownOption(sh.getLocation(), "value", "London");
		selectDropDownOption(sh.getHotels(), "value", "Hotel Sunshine");
		selectDropDownOption(sh.getRoomType(), "value", "Standard");
		selectDropDownOption(sh.getRoomNumber(), "index", "1");
		sh.getCheckIn().clear();
		sh.getCheckOut().clear();
		inputValuestoWebElement(sh.getCheckIn(), "26/06/2020");
		inputValuestoWebElement(sh.getCheckOut(), "28/06/2020");
		selectDropDownOption(sh.getAdultRoom(), "index", "1");
		selectDropDownOption(sh.getChildRoom(), "index", "1");
		clickOnWebElement(sh.getSubmit());
		
		SelectHotel shl=new SelectHotel(driver);
		clickOnWebElement(shl.getRadioBtn());
		clickOnWebElement(shl.getProceed());
		
		BookingHotel bh=new BookingHotel(driver);
		inputValuestoWebElement(bh.getFirstName(), "Devalalini");
		inputValuestoWebElement(bh.getLastName(), "K");
		inputValuestoWebElement(bh.getAddress(), "Chennai");
		scrollUsingElement(bh.getCreditCard(), "Down");
		inputValuestoWebElement(bh.getCreditCard(), "1111111111111111");
		selectDropDownOption(bh.getCreditType(), "value", "VISA");
		selectDropDownOption(bh.getMonth(), "index", "3");
		selectDropDownOption(bh.getYear(), "visibleText", "2021");
		inputValuestoWebElement(bh.getCcv(), "111");
		clickOnWebElement(bh.getBooknow());
		
		BookingConfirmPage bc=new BookingConfirmPage(driver);
		scrollUsingElement(bc.getMyItinerary(), "down");
		clickOnWebElement(bc.getMyItinerary());
		
		BookItineraryPage bi=new BookItineraryPage(driver);
		clickOnWebElement(bi.getRadioBtn());
		
		
		CancelHotel ch=new CancelHotel(driver);
		clickOnWebElement(ch.getCancelHotel());
		confirmAlert("accept");
		
		LogoutPage lp=new LogoutPage(driver);
		clickOnWebElement(lp.getLogout());
	}
}
