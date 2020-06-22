Feature: Testing hotel booking and cancellation functionalities in adactin application

@Login
Scenario Outline: Checking the valid username and password for login function
Given User launch the adactin application
When User enter "<Username>" the valid username
And User enter "<Password>" the valid password
And User enter in the login button
Examples:
|Username|Password|
|aaa|111|
|bbb|222|
|ccc|333|
|DevalaliniK|Deva@11|

Scenario: Searching the hotel in the application
Given User select "London" the location
When User select "Hotel Sunshine" the hotel
And User select "Standard" the room type
And User select "1" the no of rooms
And User select "26/06/2020" the check in date
And User select "28/06/2020" the check out date
And User select "1" the adults per room
And User select "1" the children per room
And User click on the search button

Scenario: Selecting the hotel in the application
Given User select the hotel radio button
And User click the continue button

Scenario: Booking the hotel in the application
Given User enter "Devalalini" the first name
When User enter "K" the last name
And User enter "Chennai" the address
And User enter "1111111111111111" the credit card number
And User select "VISA" the credit card type
And User select "3" the expiry month
And User select "2021" the expiry year
And User enter "111" the ccv number
And User click the book now button

Scenario: Confirming the hotel in the application
Given User scrolls the page
When User click the my itinerary button

Scenario: Selecting the hotel booked in the application
Given User select the booked hotel

Scenario: Cancelling the selected hotel in the application
Given User click the cancel hotel button
When User select "accept" accept in the alert button

@Logout
Scenario: Logging out from the application
Given User click the logout button

