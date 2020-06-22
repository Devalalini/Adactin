$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing hotel booking and cancellation functionalities in adactin application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"\u003cUsername\u003e\" the valid username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"\u003cPassword\u003e\" the valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;1"
    },
    {
      "cells": [
        "aaa",
        "111"
      ],
      "line": 11,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;2"
    },
    {
      "cells": [
        "bbb",
        "222"
      ],
      "line": 12,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;3"
    },
    {
      "cells": [
        "ccc",
        "333"
      ],
      "line": 13,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;4"
    },
    {
      "cells": [
        "DevalaliniK",
        "Deva@11"
      ],
      "line": 14,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 320000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"aaa\" the valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"111\" the valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 1914984400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 494568200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 371439200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 595192700,
  "status": "passed"
});
formatter.after({
  "duration": 267100,
  "status": "passed"
});
formatter.before({
  "duration": 158500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"bbb\" the valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"222\" the valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 569594800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bbb",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 315309700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 282566200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 526719700,
  "status": "passed"
});
formatter.after({
  "duration": 137600,
  "status": "passed"
});
formatter.before({
  "duration": 156600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ccc\" the valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"333\" the valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 296565400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ccc",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 293241400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "333",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 257137200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 470900700,
  "status": "passed"
});
formatter.after({
  "duration": 100700,
  "status": "passed"
});
formatter.before({
  "duration": 141100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Checking the valid username and password for login function",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;checking-the-valid-username-and-password-for-login-function;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"DevalaliniK\" the valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"Deva@11\" the valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter in the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 278483200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevalaliniK",
      "offset": 12
    }
  ],
formatter.result({
  "duration": 94659763300,
  "error_message": "java.lang.RuntimeException\r\n\tat com.cucumber.baseclass.BaseClass.selectDropDownOption(BaseClass.java:166)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_select_the_location(StepDefinition.java:71)\r\n\tat ✽.Given User select \"London\" the location(src/test/java/com/adactin/feature/Adactin.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_hotel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_room_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_no_of_rooms(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "26/06/2020",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_check_in_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "28/06/2020",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_check_out_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_adults_per_room(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_children_per_room(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7131600,
  "error_message": "java.lang.RuntimeException\r\n\tat com.cucumber.baseclass.BaseClass.takeScreenshot(BaseClass.java:215)\r\n\tat com.adactin.stepdefinition.Hooks.afterHooks(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 191400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Selecting the hotel in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;selecting-the-hotel-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User select the hotel radio button",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_hotel_radio_button()"
});
formatter.result({
  "duration": 120685515700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_continue_button()"
});
formatter.result({
  "duration": 120447121200,
  "status": "passed"
});
formatter.after({
  "duration": 162500,
  "status": "passed"
});
formatter.before({
  "duration": 146100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Booking the hotel in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;booking-the-hotel-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User enter \"Devalalini\" the first name",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User enter \"K\" the last name",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enter \"Chennai\" the address",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enter \"1111111111111111\" the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User select \"VISA\" the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User select \"3\" the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User select \"2021\" the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enter \"111\" the ccv number",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click the book now button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Devalalini",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_first_name(String)"
});
formatter.result({
  "duration": 120367586600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "K",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_last_name(String)"
});
formatter.result({
  "duration": 120588563500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_address(String)"
});
formatter.result({
  "duration": 120719486400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111111111111111",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_credit_card_number(String)"
});
formatter.result({
  "duration": 60460258800,
  "error_message": "java.lang.RuntimeException\r\n\tat com.cucumber.baseclass.BaseClass.scrollUsingElement(BaseClass.java:200)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_the_credit_card_number(StepDefinition.java:213)\r\n\tat ✽.And User enter \"1111111111111111\" the credit card number(src/test/java/com/adactin/feature/Adactin.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_credit_card_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_expiry_month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_expiry_year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_ccv_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_the_book_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7258600,
  "error_message": "java.lang.RuntimeException\r\n\tat com.cucumber.baseclass.BaseClass.takeScreenshot(BaseClass.java:215)\r\n\tat com.adactin.stepdefinition.Hooks.afterHooks(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 94600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Confirming the hotel in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;confirming-the-hotel-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "User scrolls the page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User click the my itinerary button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_scrolls_the_page()"
});
