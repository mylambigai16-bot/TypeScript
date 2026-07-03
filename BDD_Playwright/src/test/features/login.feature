@regression
Feature: User Authentication tests

    Background: 
        Given User navigates to the application
        And User clicks on the login link

    Scenario: Login should be success
        And User enter the email as "doedavis@yahoo.com"
        And User enter the password as "12345"
        When the user click login button
        Then the login should be successful

    Scenario: Login should be success
        And User enter the email as "ShamDoel"
        And User enter the password as "123456"
        When the user click login button
        Then the login should fail