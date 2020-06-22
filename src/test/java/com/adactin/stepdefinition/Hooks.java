package com.adactin.stepdefinition;

import com.cucumber.baseclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {
	
	@Before
	public void beforeHooks(Scenario scenario) {
		System.out.println(scenario.getName());
		System.out.println("        Started:");

	}
	
	@After
	public void afterHooks(Scenario scenario ) {
		System.out.println(" Status:"+scenario.getStatus());
		if(scenario.isFailed())
		{
			takeScreenshot(scenario.getId());
			System.out.println("Screenshots Taken");
		}
		System.out.println("        Completed:");
	}

}
