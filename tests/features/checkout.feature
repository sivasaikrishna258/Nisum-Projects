Feature: Automation exercise - checkout

    Background:
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed

    Scenario: Login and place the order
        When I click on "Signup / Login" Button
        Then Verify 'Login to your account' is visible
        And I enter "sivasaikrishna258@gmail.com" on input with placeholder "Email Address" in "Login" section
        And I enter "Sivasai@123" on input with placeholder "Password" in "Login" section
        And I click on "Login" button
        Then the "Logout" button should be "visible"
        Then Verify 'Logged in as Sivasai' is visible
        When I click on "Add to cart" button on "Blue Top" product
        And I click on "View Cart" button
        Then the product details are :
            | Description | Price   | Quantity | Total   |
            | Blue Top    | Rs. 500 | 1        | Rs. 500 |
        When I click on "Proceed To Checkout" link
        Then the "delivery" address content is
            | Address           |
            | Mr. siva sai      |
            | Nisum             |
            | Knodapur          |
            | Hyd               |
            | Nellore AP 524408 |
            | India             |
            | 9121645063        |
        When I click on "Place Order" link
        And I enter "Sivasai" on input with data-qa "name-on-card"
        And I enter "4352 1234 6753 0093" on input with data-qa "card-number"
        And I enter "123" on input with data-qa "cvc"
        And I enter "05" on input with data-qa "expiry-month"
        And I enter "2026" on input with data-qa "expiry-year"
        And I click on "Pay and Confirm Order" button
        Then Verify "Congratulations! Your order has been confirmed!" is visible
        And I click on "Cart" button
        And I wait for 3 seconds
        Then Verify 'Cart is empty!' is visible
        And I wait for 6 seconds

