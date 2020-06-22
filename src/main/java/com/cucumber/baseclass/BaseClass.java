package com.cucumber.baseclass;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass
{
public static WebDriver driver;
	
	public static WebDriver BrowserLaunch(String browsername)
	{
		try 
		{
		  if(browsername.equalsIgnoreCase("chrome"))
		  {
			System.setProperty("webdriver.chrome.driver", 
				"D:\\Eclipse\\AutomationPractice\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		  }
		  else if(browsername.equalsIgnoreCase("IE"))
		  {
			System.setProperty("webdriver.chrome.driver", 
				"D:\\Eclipse\\AutomationPractice\\Drivers\\IEDriverServer.exe");
			driver=new InternetExplorerDriver();
		  }
		  else if(browsername.equalsIgnoreCase("Firefox")) 
		  {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir"+"//geckodriver.exe"));
				driver=new InternetExplorerDriver();
		  }
		  else
		  {
			System.out.println("Invalid Broser Name");
		  }
		  driver.manage().window().maximize();	
		  driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		  return driver;	
		} 
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return driver;
	}
	
	public static void getURL(String URL) 
	{
		driver.get(URL);
	}
	
	public static void waitforElementVisibility(WebElement element)	
	{
		try 
		{
		 WebDriverWait wb = new WebDriverWait(driver, 60);
		 wb.until(ExpectedConditions.visibilityOf(element));
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		}
	}
	
	public static void implicitWait(int number)
	{ 
		try
		{
		driver.manage().timeouts().implicitlyWait(number, TimeUnit.SECONDS);
		}
		catch (Exception e) 
		{
		e.printStackTrace();
		}
	}
	
	public static void clickOnWebElement(WebElement element)
	{
		waitforElementVisibility(element);
		try {
			if(elementIsDisplayed(element))
				element.click();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static boolean elementIsDisplayed(WebElement element) 
	{
		waitforElementVisibility(element);
		boolean displayed=false;
		try {
			displayed=element.isDisplayed();
			return displayed;
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return displayed;
	}
	
	public static boolean elementIsEnabled(WebElement element) 
	{
		waitforElementVisibility(element);
		try {
			boolean enabled=element.isEnabled();
			return enabled;
			
		} catch (Exception e)
		{
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public static void inputValuestoWebElement(WebElement element,String value)
	{
		waitforElementVisibility(element);
		try {
			if(elementIsDisplayed(element)&& elementIsEnabled(element))
			{
				element.sendKeys(value);
			}
			
		}
		catch (Exception e) {
		e.printStackTrace();
		throw new RuntimeException();
		}
	}
	
	public static void selectDropDownOption(WebElement element, String option, String value)
	{
		waitforElementVisibility(element);
		try {
			Select s = new Select(element);
			if(option.equalsIgnoreCase("value"))
			{
				s.selectByValue(value);
			}
			else if(option.equalsIgnoreCase("visibletext"))
			{
				s.selectByVisibleText(value);
			}
			else if(option.equalsIgnoreCase("index"))
			{
				s.selectByIndex(Integer.parseInt(value));
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public static void mouseHoverToElement(WebElement element) 
	{
		waitforElementVisibility(element);
		try {
			Actions ac = new Actions(driver);
			ac.moveToElement(element).build().perform();		
		} catch (Exception e) 
		{
		e.printStackTrace();
		throw new RuntimeException();
		}
	}
	
	public static void scrollUsingElement(WebElement element, String option) 
	{
		waitforElementVisibility(element);
		try {
			JavascriptExecutor js = (JavascriptExecutor) driver;
			
			if(option.equalsIgnoreCase("Up"))
			{
				js.executeScript("arguments[0].scrollIntoView(false);", element);
			}
			else if(option.equalsIgnoreCase("Down"))
			{
				js.executeScript("arguments[0].scrollIntoView(true);", element);
			}
		} catch (Exception e) 
		{
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public static void takeScreenshot(String filename) 
	{
		try {
			TakesScreenshot ts=(TakesScreenshot) driver;
			File srcFile = ts.getScreenshotAs(OutputType.FILE);
			File desFile = new File(System.getProperty("user.dir")+"\\Screenshots\\"+filename+".png");
			FileUtils.copyFile(srcFile, desFile);
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public static void close()
	{
		try
		{
		driver.close();
		}
		catch (Exception e) 
		{
		e.printStackTrace();
		throw new RuntimeException();
		}		
	}
	
	public static void quit() 
	{
		try 
		{
			driver.quit();
		} 
		catch (Exception e) 
		{
		e.printStackTrace();
		throw new RuntimeException();
		}
	}
	
	public static void navigateTo(String URL)
	{
		try 
		{
			driver.navigate().to(URL);
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
			throw new RuntimeException();		
		}
	}
	
	public static void navigateBack() 
	{
		try {
			driver.navigate().back();
		} 
		catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();		
		}		
	}
	
	public static void navigateForward() 
	{
		try {
			driver.navigate().forward();
		}
		catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();		
		}
	}
	
	public static void navigateRefresh()
	{
		try {
			driver.navigate().refresh();
		}
		catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();		
		}		
	}
	
	public static void switchToFrameUsingElement(String option, WebElement element) 
	{
		waitforElementVisibility(element);
		try {
			if (option.equals("element"))
			{
				driver.switchTo().frame(element);
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}	
	
	public static void switchToFrameUsingName(String option,String framename)
	{
		try {
			if(option.equals("name"))
			{
				driver.switchTo().frame(framename);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
			}
	}
	
	public static void switchToFrameUsingId(String option,int index) 
	{
		try {
			if(option.equals("index"))
			{
				driver.switchTo().frame(index);
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
			}
	}
	
	public static void switchToDefault() 
	{
		try {
			driver.switchTo().defaultContent();
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
			}
	}
	
	public static void simpleAlert(WebElement element)
	{
		try {
			waitforElementVisibility(element);
			Alert simpleAlert = driver.switchTo().alert();
			simpleAlert.accept();
		}
		catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
			}
	}
	
	public static void confirmAlert(String condition)
	{
	try {
		Alert confirmAlert = driver.switchTo().alert();
		if(condition.equalsIgnoreCase("accept"))
		{
			confirmAlert.accept();
		}
		else if(condition.equalsIgnoreCase("dismiss"))
		{
			confirmAlert.dismiss();
		}
	} 
	catch (Exception e) {
		e.printStackTrace();
		throw new RuntimeException();
		}
	}
	
	public static void promptAlert(WebElement element,String condition,String value) 
	{
		try {
			waitforElementVisibility(element);
			Alert promptAlert = driver.switchTo().alert();
			if(condition.equalsIgnoreCase("accept"))
			{
				promptAlert.sendKeys(value);
				promptAlert.accept();	
			}
			else if(condition.equalsIgnoreCase("dismiss"))
			{
				promptAlert.dismiss();
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
			}
	}
	
	public static boolean elementIsSelected(WebElement element) 
	{
		waitforElementVisibility(element);
		try {
			boolean selected=element.isSelected();
			return selected;
			
		} catch (Exception e)
		{
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
}
