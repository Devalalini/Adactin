package com.cucumber.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.baseclass.BaseClass;

public class SignInPage extends BaseClass 
	{
		public static WebDriver driver;
		
		@FindBy(id="username")
		private WebElement username;
		
		@FindBy(id="password")
		private WebElement password;
		
		@FindBy(id="login")
		private WebElement login;
		
		public SignInPage(WebDriver ldriver)
		{
			this.driver=ldriver;
			PageFactory.initElements(driver, this);
			
		}
		
		public static WebDriver getDriver() {
			return driver;
		}

		public WebElement getUsername() {
			return username;
		}

		public WebElement getPassword() {
			return password;
		}

		public WebElement getLogin() {
			return login;
		}
}
