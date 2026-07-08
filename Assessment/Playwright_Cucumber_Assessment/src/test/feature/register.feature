Feature: Register feature

    Background:
        Given the user on the Homepage
        And user click on the register link

    Scenario Outline: Register with valid credentials
        And fill the mandatory field "<First name>","<Last name>","<Email>","<Password>" and "ConfirmPassword"
        When user click on Register button
        Then application displat the registration completed message

        Examples:
            | First name | Last name | Email           | Password | ConfirmPassword |
            | Mugan      | M         | mugan@gmail.com | 123456   | 123456          |