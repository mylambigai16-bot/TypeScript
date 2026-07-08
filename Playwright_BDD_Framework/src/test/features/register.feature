@smoke @register
Feature: Registeration

    Background:
        Given Launch the application
        When the user click Register link

    @valid @smoke
    Scenario: Valid registration
        And the user enter the following details
            | Firstname  | lastname | email | telephone  | password | confirmPassword |
            | emmawatson | Kevin    | email | 6398520147 | 123456   | 123456          |
        And the user click the privacy policy
        When the user click continue button
        Then the user should able register successfully

    @invalid
    Scenario: Invalid registration with Existing username
        And the user enter the following details
            | Firstname  | lastname | email                | telephone  | password | confirmPassword |
            | emmawatson | Kevin    | emmawatson@yahoo.com | 6398520147 | 123456   | 123456          |
        And the user click the privacy policy
        When the user click continue button
        Then the user should able to see the error message