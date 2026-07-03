@smoke
Feature: Registeration

    Background:
        Given Launch the application
        When the user click Register link

    Scenario: Valid registration
        And the user enter the following details
            | Firstname | lastname | email              | telephone  | password | confirmPassword |
            | shamdoe   | Davis    | doedavis@yahoo.com | 9087654321 | 12345    | 12345           |
        And the user click the privacy policy
        When the user click continue button
        Then the user should able register successfully

    Scenario: Invalid registration with Existing username
        And the user enter the following details
            | Firstname | lastname | email              | telephone  | password | confirmPassword |
            | shamdoe   | Davis    | doedavis@yahoo.com | 9087654321 | 12345    | 12345           |
        And the user click the privacy policy
        When the user click continue button
        Then the user should able to see the error message