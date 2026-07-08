@search
Feature: Product Search

    Background:
        Given Launch the application

    @valid
    Scenario Outline: Search products
        And User enters "<product>" in the search field
        When User clicks the search button
        Then User should see searched "<product>" in the search results

        Examples:
            | product |
            | MacBook |
            | iPhone  |

    @invalid
    Scenario Outline: Search invalid product
        And User enters "<invalid product>" name in the search field
        When User clicks the search button
        Then User should see no products found message

        Examples:
            | invalid product |
            | nike            |