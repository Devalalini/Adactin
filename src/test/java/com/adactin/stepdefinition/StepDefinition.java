package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.runner.Runner;
import com.adactin.utility.ConfigurationReader;
import com.adactin.utility.FileReaderManager;
import com.adactin.utility.PageObjectManager;
import com.cucumber.baseclass.BaseClass;
import com.cucumber.pom.BookItineraryPage;
import com.cucumber.pom.BookingConfirmPage;
import com.cucumber.pom.BookingHotel;
import com.cucumber.pom.CancelHotel;
import com.cucumber.pom.LogoutPage;
import com.cucumber.pom.SearchHotel;
import com.cucumber.pom.SelectHotel;
import com.cucumber.pom.SignInPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass {
	public static WebDriver driver=Runner.driver;
	
	PageObjectManager Pom=new PageObjectManager(driver);
	
	@Given("^User launch the adactin application$")
	public void user_launch_the_adactin_application() throws Throwable {
//		ConfigurationReader con=new ConfigurationReader();
		String url = FileReaderManager.getInstance().getCRInstance().getURL();
		getURL(url);
	}

/*	@When("^User enter the valid username$")
	public void user_enter_the_valid_username() throws Throwable {
//		SignInPage sp=new SignInPage(driver);
		inputValuestoWebElement(Pom.getSip().getUsername(), "DevalaliniK");
	}

	@When("^User enter the valid password$")
	public void user_enter_the_valid_password() throws Throwable {
//		SignInPage sp=new SignInPage(driver);
		inputValuestoWebElement(Pom.getSip().getPassword(), "Deva@11");
	}
	*/

	@When("^User enter \"([^\"]*)\" the valid username$")
	public void user_enter_the_valid_username(String username) throws Throwable {
		inputValuestoWebElement(Pom.getSip().getUsername(), username);
	}

	@When("^User enter \"([^\"]*)\" the valid password$")
	public void user_enter_the_valid_password(String password) throws Throwable {
		inputValuestoWebElement(Pom.getSip().getPassword(), password);
	}
	
	@When("^User enter in the login button$")
	public void user_enter_in_the_login_button() throws Throwable {
		clickOnWebElement(Pom.getSip().getLogin());
	}
	
//	@Given("^User select the location$")
//	public void user_select_the_location() throws Throwable {
////		SearchHotel sh=new SearchHotel(driver);
//		selectDropDownOption(Pom.getSh().getLocation(), "value", "London");
//	}
	
	@Given("^User select \"([^\"]*)\" the location$")
	public void user_select_the_location(String location) throws Throwable {
		selectDropDownOption(Pom.getSh().getLocation(), "value", location);
	}

//	@When("^User select the hotel$")
//	public void user_select_the_hotel() throws Throwable {
////		SearchHotel sh=new SearchHotel(driver);
//		selectDropDownOption(Pom.getSh().getHotels(), "value", "Hotel Sunshine");
//	}
	
	@When("^User select \"([^\"]*)\" the hotel$")
	public void user_select_the_hotel(String hotel) throws Throwable {
		selectDropDownOption(Pom.getSh().getHotels(), "value", hotel);
	}

//	@When("^User select the room type$")
//	public void user_select_the_room_type() throws Throwable {
////		SearchHotel sh=new SearchHotel(driver);
//		selectDropDownOption(Pom.getSh().getRoomType(), "value", "Standard");
//	}
	
	@When("^User select \"([^\"]*)\" the room type$")
	public void user_select_the_room_type(String roomtype) throws Throwable {
		selectDropDownOption(Pom.getSh().getRoomType(), "value", roomtype);
	}

//	@When("^User select the no of rooms$")
//	public void user_select_the_no_of_rooms() throws Throwable {
////		SearchHotel sh=new SearchHotel(driver);
//		selectDropDownOption(Pom.getSh().getRoomNumber(), "index", "1");
//	}
	
	@When("^User select \"([^\"]*)\" the no of rooms$")
	public void user_select_the_no_of_rooms(String no_of_rooms) throws Throwable {
		selectDropDownOption(Pom.getSh().getRoomNumber(), "index", no_of_rooms);
	}

//	@When("^User select the check in date$")
//	public void user_select_the_check_in_date() throws Throwable {
////		SearchHotel sh=new SearchHotel(driver);
//		Pom.getSh().getCheckIn().clear();
//		inputValuestoWebElement(Pom.getSh().getCheckIn(), "26/06/2020");
//	}
	
	@When("^User select \"([^\"]*)\" the check in date$")
	public void user_select_the_check_in_date(String checkin) throws Throwable {
		Pom.getSh().getCheckIn().clear();
		inputValuestoWebElement(Pom.getSh().getCheckIn(), checkin);
	}


//	@When("^User select the check out date$")
//	public void user_select_the_check_out_date() throws Throwable {
////		SearchHotel sh=new SearchHotel(driver);
//		Pom.getSh().getCheckOut().clear();
//		inputValuestoWebElement(Pom.getSh().getCheckOut(), "28/06/2020");
//	}
	
	@When("^User select \"([^\"]*)\" the check out date$")
	public void user_select_the_check_out_date(String checkout) throws Throwable {
		Pom.getSh().getCheckOut().clear();
		inputValuestoWebElement(Pom.getSh().getCheckOut(), checkout);
	}

//	@When("^User select the adults per room$")
//	public void user_select_the_adults_per_room() throws Throwable {
////		SearchHotel sh=new SearchHotel(driver);
//		selectDropDownOption(Pom.getSh().getAdultRoom(), "index", "1");
//	}
	
	@When("^User select \"([^\"]*)\" the adults per room$")
	public void user_select_the_adults_per_room(String adultroom) throws Throwable {
		selectDropDownOption(Pom.getSh().getAdultRoom(), "index", adultroom);
	}

//	@When("^User select the children per room$")
//	public void user_select_the_children_per_room() throws Throwable {
////		SearchHotel sh=new SearchHotel(driver);
//		selectDropDownOption(Pom.getSh().getChildRoom(), "index", "1");
//	}

	@When("^User select \"([^\"]*)\" the children per room$")
	public void user_select_the_children_per_room(String childroom) throws Throwable {
		selectDropDownOption(Pom.getSh().getChildRoom(), "index", childroom);
	}
	
	@When("^User click on the search button$")
	public void user_click_on_the_search_button() throws Throwable {
		clickOnWebElement(Pom.getSh().getSubmit());
	}
	
	@Given("^User select the hotel radio button$")
	public void user_select_the_hotel_radio_button() throws Throwable {
		clickOnWebElement(Pom.getShl().getRadioBtn());
	}

	@Given("^User click the continue button$")
	public void user_click_the_continue_button() throws Throwable {
		clickOnWebElement(Pom.getShl().getProceed());
	}

//	@Given("^User enter the first name$")
//	public void user_enter_the_first_name() throws Throwable {
////		BookingHotel bh=new BookingHotel(driver);
//		inputValuestoWebElement(Pom.getBh().getFirstName(), "Devalalini");
//	}
	
	@Given("^User enter \"([^\"]*)\" the first name$")
	public void user_enter_the_first_name(String firstname) throws Throwable {
		inputValuestoWebElement(Pom.getBh().getFirstName(), firstname);
	}

//	@When("^User enter the last name$")
//	public void user_enter_the_last_name() throws Throwable {
////		BookingHotel bh=new BookingHotel(driver);
//		inputValuestoWebElement(Pom.getBh().getLastName(), "K");
//	}
	
	@When("^User enter \"([^\"]*)\" the last name$")
	public void user_enter_the_last_name(String lastname) throws Throwable {
		inputValuestoWebElement(Pom.getBh().getLastName(), lastname);
	}

//	@When("^User enter the address$")
//	public void user_enter_the_address() throws Throwable {
////		BookingHotel bh=new BookingHotel(driver);
//		inputValuestoWebElement(Pom.getBh().getAddress(), "Chennai");
//	}
	
	@When("^User enter \"([^\"]*)\" the address$")
	public void user_enter_the_address(String address) throws Throwable {
		inputValuestoWebElement(Pom.getBh().getAddress(), address);
	}

//	@When("^User enter the credit card number$")
//	public void user_enter_the_credit_card_number() throws Throwable {
////		BookingHotel bh=new BookingHotel(driver);
//		scrollUsingElement(Pom.getBh().getCreditCard(), "Down");
//		inputValuestoWebElement(Pom.getBh().getCreditCard(), "1111111111111111");
//	}
	
	@When("^User enter \"([^\"]*)\" the credit card number$")
	public void user_enter_the_credit_card_number(String cardnumber) throws Throwable {
		scrollUsingElement(Pom.getBh().getCreditCard(), "Down");
		inputValuestoWebElement(Pom.getBh().getCreditCard(), cardnumber);
	}


//	@When("^User select the credit card type$")
//	public void user_select_the_credit_card_type() throws Throwable {
////		BookingHotel bh=new BookingHotel(driver);
//		selectDropDownOption(Pom.getBh().getCreditType(), "value", "VISA");
//	}

	@When("^User select \"([^\"]*)\" the credit card type$")
	public void user_select_the_credit_card_type(String cardtype) throws Throwable {
		selectDropDownOption(Pom.getBh().getCreditType(), "value", cardtype);
	}

//	@When("^User select the expiry month$")
//	public void user_select_the_expiry_month() throws Throwable {
////		BookingHotel bh=new BookingHotel(driver);
//		selectDropDownOption(Pom.getBh().getMonth(), "index", "3");
//	}
	
	@When("^User select \"([^\"]*)\" the expiry month$")
	public void user_select_the_expiry_month(String expirymonth) throws Throwable {
		selectDropDownOption(Pom.getBh().getMonth(), "index", expirymonth);
	}
	
//	@When("^User select the expiry year$")
//	public void user_select_the_expiry_year() throws Throwable {
////		BookingHotel bh=new BookingHotel(driver);
//		selectDropDownOption(Pom.getBh().getYear(), "visibleText", "2021");
//	}

	@When("^User select \"([^\"]*)\" the expiry year$")
	public void user_select_the_expiry_year(String expiryyear) throws Throwable {
		selectDropDownOption(Pom.getBh().getYear(), "visibleText", expiryyear);
	}
	
//	@When("^User enter the ccv number$")
//	public void user_enter_the_ccv_number() throws Throwable {
////		BookingHotel bh=new BookingHotel(driver);
//		inputValuestoWebElement(Pom.getBh().getCcv(), "111");
//	}
	
	@When("^User enter \"([^\"]*)\" the ccv number$")
	public void user_enter_the_ccv_number(String cvv) throws Throwable {
		inputValuestoWebElement(Pom.getBh().getCcv(), cvv);
	}

	@When("^User click the book now button$")
	public void user_click_the_book_now_button() throws Throwable {
		clickOnWebElement(Pom.getBh().getBooknow());
	}

	@Given("^User scrolls the page$")
	public void user_scrolls_the_page() throws Throwable {
		scrollUsingElement(Pom.getBcp().getMyItinerary(), "down");
	}

	@When("^User click the my itinerary button$")
	public void user_click_the_my_itinerary_button() throws Throwable {
		clickOnWebElement(Pom.getBcp().getMyItinerary());
	}

	@Given("^User select the booked hotel$")
	public void user_select_the_booked_hotel() throws Throwable {
		clickOnWebElement(Pom.getBip().getRadioBtn());
	}

	@Given("^User click the cancel hotel button$")
	public void user_click_the_cancel_hotel_button() throws Throwable {
		clickOnWebElement(Pom.getCh().getCancelHotel());
	}

//	@When("^User select accept in the alert button$")
//	public void user_select_accept_in_the_alert_button() throws Throwable {
//		confirmAlert("accept");
//	}
	
	@When("^User select \"([^\"]*)\" accept in the alert button$")
	public void user_select_accept_in_the_alert_button(String alertbtn) throws Throwable {
		confirmAlert(alertbtn);
	}

	@Given("^User click the logout button$")
	public void user_click_the_logout_button() throws Throwable {
		clickOnWebElement(Pom.getLp().getLogout());
	}
}




