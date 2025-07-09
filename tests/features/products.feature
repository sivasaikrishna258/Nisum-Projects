Feature: Automation exercise - products page

    Background:
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed

    Scenario: Verify product details page
        When I click on "Products" button
        Then the "All Products" header is visible
        And Products list is displayed
        When I click on "View Product" link from product 2
        Then I am on products details page
        Then the following product details should be displayed:
            | field        | value         |
            | Name         | Men Tshirt    |
            | Category     | Men > Tshirts |
            | Price        | Rs. 400       |
            | Availability | In Stock      |
            | Condition    | New           |
            | Brand        | H&M           |

    Scenario: Verify search functionality
        When I click on "Products" button
        Then the "All Products" header is visible
        And Products list is displayed
        When I enter "Tshirts" on input with placeholder "Search Product"
        And I click on button with id "submit_search"
        And I wait for 3 seconds
        Then the "Searched Products" header is visible
        And all the products related to "Tshirt" should be visible
        And I wait for 6 seconds

   
