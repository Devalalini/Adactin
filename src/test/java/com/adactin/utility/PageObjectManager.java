package com.adactin.utility;

import org.openqa.selenium.WebDriver;

import com.cucumber.pom.BookItineraryPage;
import com.cucumber.pom.BookingConfirmPage;
import com.cucumber.pom.BookingHotel;
import com.cucumber.pom.CancelHotel;
import com.cucumber.pom.LogoutPage;
import com.cucumber.pom.SearchHotel;
import com.cucumber.pom.SelectHotel;
import com.cucumber.pom.SignInPage;

public class PageObjectManager {

	public static WebDriver driver;
	
	private BookingConfirmPage Bcp;
	private BookingHotel Bh;
	private BookItineraryPage Bip;
	private CancelHotel Ch;
	private LogoutPage Lp;
	private SearchHotel Sh;
	private SelectHotel Shl;
	private SignInPage Sip;
	
	public PageObjectManager(WebDriver ldriver) {
		this.driver=ldriver;
	}
	
	public BookingConfirmPage getBcp() {
		Bcp=new BookingConfirmPage(driver);
		return Bcp;
	}
	
	public BookingHotel getBh() {
		Bh=new BookingHotel(driver);
		return Bh;
	}
	
	public BookItineraryPage getBip() {
		Bip=new BookItineraryPage(driver);
		return Bip;
	}
	
	public CancelHotel getCh() {
		Ch=new CancelHotel(driver);
		return Ch;
	}
	
	public LogoutPage getLp() {
		Lp=new LogoutPage(driver);
		return Lp;
	}
	
	public SearchHotel getSh() {
		Sh=new SearchHotel(driver);
		return Sh;
	}
	
	public SelectHotel getShl() {
		Shl=new SelectHotel(driver);
		return Shl;
	}
	
	public SignInPage getSip() {
		Sip=new SignInPage(driver);
		return Sip;
	}
	
}
