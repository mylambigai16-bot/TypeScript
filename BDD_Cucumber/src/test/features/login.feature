Feature: User Authentication Test

    Background:
        Given User Navigate to the application
        And User click on login button

    Scenario: Valid Login
        And User enter the Username as "Mugan M"
        And User enter the Password as "Mylu0616"
        When User click on the login button
        Then the login should Success

    Scenario: Invalid Login
        And User enter the Username as "Mugan M"
        And User entter the Password as "mylu0616"
        When User click on the login button
        Then the login should Fail