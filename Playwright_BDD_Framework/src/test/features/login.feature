@login
Feature: Login to the application

    Background:
        Given Launch the application
        And click on the My account link
        And click on the login link

    @smoke @valid
    Scenario: Valid Login
        When user enters valid email and password
        And click on Login button
        Then user should be login successfully

    @invalidlod
    Scenario: Invalid Login
        When user enters invalid email and password
        And click on Login button
        Then user should get the warning message


