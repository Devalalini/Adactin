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
  "duration": 402900,
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
  "duration": 2681527100,
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
  "duration": 762936600,
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
  "duration": 484322700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 781692000,
  "status": "passed"
});
formatter.after({
  "duration": 315400,
  "status": "passed"
});
formatter.before({
  "duration": 466200,
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
  "duration": 535631800,
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
  "duration": 436347800,
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
  "duration": 424112900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 519638000,
  "status": "passed"
});
formatter.after({
  "duration": 223000,
  "status": "passed"
});
formatter.before({
  "duration": 243400,
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
  "duration": 326546800,
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
  "duration": 528764400,
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
  "duration": 501134800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 636703100,
  "status": "passed"
});
formatter.after({
  "duration": 121400,
  "status": "passed"
});
formatter.before({
  "duration": 127100,
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
  "duration": 397788000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevalaliniK",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 595709200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deva@11",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 509575600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_the_login_button()"
});
formatter.result({
  "duration": 2903974300,
  "status": "passed"
});
formatter.after({
  "duration": 128000,
  "status": "passed"
});
formatter.before({
  "duration": 163700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Searching the hotel in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;searching-the-hotel-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User select \"London\" the location",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User select \"Hotel Sunshine\" the hotel",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User select \"Standard\" the room type",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select \"1\" the no of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select \"26/06/2020\" the check in date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select \"28/06/2020\" the check out date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select \"1\" the adults per room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select \"1\" the children per room",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on the search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_the_location(String)"
});
formatter.result({
  "duration": 279601800,
  "status": "passed"
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
  "duration": 262843000,
  "status": "passed"
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
  "duration": 259425100,
  "status": "passed"
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
  "duration": 274328800,
  "status": "passed"
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
  "duration": 613400800,
  "status": "passed"
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
  "duration": 505131100,
  "status": "passed"
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
  "duration": 255975300,
  "status": "passed"
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
  "duration": 495402500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_the_search_button()"
});
formatter.result({
  "duration": 1092511800,
  "status": "passed"
});
formatter.after({
  "duration": 197500,
  "status": "passed"
});
formatter.before({
  "duration": 319700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Selecting the hotel in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;selecting-the-hotel-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User select the hotel radio button",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_hotel_radio_button()"
});
formatter.result({
  "duration": 235809300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_continue_button()"
});
formatter.result({
  "duration": 1098299600,
  "status": "passed"
});
formatter.after({
  "duration": 474400,
  "status": "passed"
});
formatter.before({
  "duration": 149600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Booking the hotel in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;booking-the-hotel-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User enter \"Devalalini\" the first name",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User enter \"K\" the last name",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enter \"Chennai\" the address",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enter \"1111111111111111\" the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User select \"VISA\" the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User select \"3\" the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User select \"2021\" the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User enter \"111\" the ccv number",
  "keyword": "And "
});
formatter.step({
  "line": 40,
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
  "duration": 539736700,
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
  "duration": 409311600,
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
  "duration": 434234300,
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
  "duration": 586322000,
  "status": "passed"
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
  "duration": 205615700,
  "status": "passed"
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
  "duration": 329726000,
  "status": "passed"
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
  "duration": 303632500,
  "status": "passed"
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
  "duration": 384295100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_book_now_button()"
});
formatter.result({
  "duration": 244607400,
  "status": "passed"
});
formatter.after({
  "duration": 79500,
  "status": "passed"
});
formatter.before({
  "duration": 83500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Confirming the hotel in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;confirming-the-hotel-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User scrolls the page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User click the my itinerary button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_scrolls_the_page()"
});
formatter.result({
  "duration": 5793804700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_my_itinerary_button()"
});
formatter.result({
  "duration": 727059900,
  "status": "passed"
});
formatter.after({
  "duration": 242400,
  "status": "passed"
});
formatter.before({
  "duration": 141300,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Selecting the hotel booked in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;selecting-the-hotel-booked-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "User select the booked hotel",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_select_the_booked_hotel()"
});
formatter.result({
  "duration": 308929600,
  "status": "passed"
});
formatter.after({
  "duration": 129700,
  "status": "passed"
});
formatter.before({
  "duration": 135400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Cancelling the selected hotel in the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;cancelling-the-selected-hotel-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "User click the cancel hotel button",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User select \"accept\" accept in the alert button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_click_the_cancel_hotel_button()"
});
formatter.result({
  "duration": 331356100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accept",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_select_accept_in_the_alert_button(String)"
});
formatter.result({
  "duration": 15264100,
  "status": "passed"
});
formatter.after({
  "duration": 254200,
  "status": "passed"
});
formatter.before({
  "duration": 227200,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Logging out from the application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin-application;logging-out-from-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User click the logout button",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_click_the_logout_button()"
});
formatter.result({
  "duration": 1153655500,
  "status": "passed"
});
formatter.after({
  "duration": 166200,
  "status": "passed"
});
});