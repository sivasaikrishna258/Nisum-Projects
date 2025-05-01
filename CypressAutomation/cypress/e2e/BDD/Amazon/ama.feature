Feature: Search functionality

# Scenario: Verify search validation

# Given user is on amazon homepage
# When user enter text and click on search button
# Then user should see the products



Scenario: User searches for a product and applies filters
    Given the user is on the Amazon homepage
    When the user searches for "laptops"
    And the user clicks the search button
    Then the search results page should display products related to "laptops"
    When the user applies a brand filter for "Dell"
    And the user applies an OS filter for "Intel"
    Then the products should be from the brand "Dell"
    And the products should have "Intel" as the operating system

 Scenario: User adds a product to the cart
    Given the user is on the Amazon homepage
    When the user searches for "Headphones"
     And the user clicks the search button
    And the user clicks on the first product in the search results
    And the user clicks the "Add to Cart" button
    Then a confirmation message should appear
    And the cart should reflect the added product

Scenario: User attempts to checkout with an empty cart
    Given the user is on the Amazon homepage
    When the user navigates to the shopping cart page
    Then the user should not be able see proceed to checkout button
    And the user should see a message indicating the cart is empty


Scenario: User attempts to checkout with a product in the cart
    Given the user is on the Amazon homepage
    When the user searches for "Shoes"
    And the user clicks the search button
    And the user clicks on the first product in the search results
    And the user clicks the "Add to Cart" button
    When the user navigates to the shopping cart page
    Then the user should be able to proceed to checkout
    And the user should see a Sign in Page

Scenario: User updates the quantity of a product in the cart
    Given the user is on the Amazon homepage
    When the user searches for "Shoes"
    And the user clicks the search button
    And the user clicks on the first product in the search results
    And the user updates the quantity of the product to "2"
    And the user clicks the "Add to Cart" button
    When the user navigates to the shopping cart page
    Then the shopping cart should reflect the updated quantity of "2"
    And the total price should be updated accordingly


