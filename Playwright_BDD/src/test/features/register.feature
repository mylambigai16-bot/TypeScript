Feature: Register Test

 Background:
        Given User Navigate to the application
        And User click on Register button

Scenario: Register with valid credentials
And User enter Firstname as "Mugan"
And User enters Lastname as "M"
And User enters  as "mugan@gmail.com"
And User enter Password as "123456"
And User enters Confirmpassword as "123456"
When User click on Register button
Then the Register should be success!

