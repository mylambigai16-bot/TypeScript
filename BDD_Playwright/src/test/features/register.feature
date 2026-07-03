@smoke
Feature: Registeration

    Background: 
        Given Launch the application
        When the user click Register link

    Scenario: Valid registration
        And the user enter Firstname as "shamdoe"
        And the user enter lastname as "Davis"
        And the user enter email as "davya123@yahoo.com"
        And the user enter telephone as "9087654321"
        And the user enter password as "12345"
        And the user enter confirm password as "12345"
        And the user click the privacy policy
        When the user click continue button
        Then the user should able register successfully
    
    Scenario: Invalid registration with Existing username
        And the user enter Firstname as "Emily"
        And the user enter lastname as "Davis"
        And the user enter email as "doedavis@yahoo.com"
        And the user enter telephone as "9087654321"
        And the user enter password as "12345"
        And the user enter confirm password as "12345"
        And the user click the privacy policy
        When the user click continue button
        Then the user should able to see the error message