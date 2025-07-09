@sanity
Feature: Automation exercise - cart

    Background:
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed

    Scenario: Add products to the cart and verfy the details
        When I click on "Products" button
        And I hover on the product number 1
        And I click on "Add to cart" link from product 1
        And I click on "Continue Shopping" button
        And I click on "Cart" button
        Then Verify cart has 1 products
        And the product details are :
            | Description | Price   | Quantity | Total   |
            | Blue Top    | Rs. 500 | 1        | Rs. 500 |
        And I wait for 3 seconds
        When I click on "Products" button
        And I hover on the product number 3
        And I click on "Add to cart" link from product 3
        And I wait for 3 seconds
        And I click on "View Cart" button
        And the product details are :
            | Description | Price   | Quantity | Total   |
            | Blue Top    | Rs. 500 | 1        | Rs. 500 |
            | Men Tshirt  | Rs. 400 | 1        | Rs. 400 |

    Scenario: Verify cart quantity items by increasing the quatity in product details page
        When I click on "Products" button
        Then the "All Products" header is visible
        And Products list is displayed
        When I click on "View Product" button on "Blue Top" product
        Then I am on products details page
        When I set "quantity" input to 2
        And I click on "Add to cart" button
        And I click on "View Cart" button
        And I wait for 3 seconds
        Then the product details are :
            | Description | Price   | Quantity | Total    |
            | Blue Top    | Rs. 500 | 2        | Rs. 1000 |


    Scenario: Remove the products from the cart and verify removed products should not be in the cart
        When I click on "Products" button
        Then the "All Products" header is visible
        And Products list is displayed
        When I click on "Add to cart" button on "Blue Top" product
        And I click on "Continue Shopping" button
        When I click on "Add to cart" button on "Colour Blocked Shirt – Sky Blue" product
        And I click on "View Cart" button
        Then the product details are :
            | Description                     | Price   | Quantity | Total   |
            | Blue Top                        | Rs. 500 | 1        | Rs. 500 |
            | Colour Blocked Shirt – Sky Blue | Rs. 849 | 1        | Rs. 849 |
        When I remove the "Blue Top" product from cart
        And I wait for 3 seconds
        Then the product details are :
            | Description                     | Price   | Quantity | Total   |
            | Colour Blocked Shirt – Sky Blue | Rs. 849 | 1        | Rs. 849 |
        And I wait for 5 seconds

    # Scenario: Verify empty cart
    #         When I click on "Cart" button

