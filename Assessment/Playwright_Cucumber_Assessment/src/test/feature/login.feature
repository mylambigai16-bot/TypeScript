Feature: Login feature

    Background:
        Given the user on the Homepage
        And click on the Login link

    Scenario: Login with valid credential
        And enter email and password
        When click on the Login buttton
        Then user should login successfully

    Scenario: Login with invalid credential
        And enter invalid email and password
        When click on the Login buttton
        Then user should get error message
