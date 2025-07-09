Feature: Automation exercise - homepage

    Background:
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed

    Scenario: Navigate to Contact us form
        And I click on "Contact us" button
        And I wait for 3 seconds
        Then the "Get In Touch" header is visible
        When I enter "sivasai" on input with placeholder "Name"
        When I enter "sivasaikrishna@gmail.com" on input with placeholder "Email"
        When I enter "not able to login" on input with placeholder "Subject"
        And I handle the alert
        And I click on "Submit" button
        Then the "Success! Your details have been submitted successfully." alert message is displayed
        When I click on "Home" button
        Then Verify HomePage is dislayed

    Scenario: Verify subscription on footer
        When I scroll down to footer
        Then the "Subscription" header is visible
        When I enter "sivasai@123" on input with placeholder "Your email address"
        And I click on button with id "subscribe"
        Then the "You have been successfully subscribed!" alert message is displayed
        And I wait for 6 seconds

    Scenario: Verify category products
        Then the "Category" header is visible
        When I expand "Men" category
        When I click on "Tshirts " category under "Men" section in the sidebar
        Then the "Men - Tshirts Products" header is visible with related products displayed
        When I expand "Women" category
        When I click on "Dress  " category under "Women" section in the sidebar
        Then the "Women - Dress Products" header is visible with related products displayed
        And I wait for 6 seconds

    Scenario: Verify brand products
        And I click on "Products" button
        Then the "Brands" header is visible
        When I click on "Polo" brand
        Then the "Brand - Polo Products" header is visible with related products displayed
        When I click on "H&M" brand
        Then the "Brand - H&M Products" header is visible with related products displayed

    Scenario: Add products to the cart and verify cart products should be displayed after login
        And I click on "Products" button
        Then the "All Products" header is visible
        And Products list is displayed
        When I enter "Tshirts" on input with placeholder "Search Product"
        And I click on button with id "submit_search"
        And I wait for 3 seconds
        Then the "Searched Products" header is visible
        And all the products related to "Tshirt" should be visible
        When I click on "Add to cart" button on "Men Tshirt" product
        And I click on "View Cart" button
        Then the product details are :
            | Description | Price   | Quantity | Total   |
            | Men Tshirt  | Rs. 400 | 1        | Rs. 400 |
        When I click on "Signup / Login" Button
        Then Verify 'Login to your account' is visible
        And I enter "sivasaikrishna258@gmail.com" on input with placeholder "Email Address" in "Login" section
        And I enter "Sivasai@123" on input with placeholder "Password" in "Login" section
        And I click on "Login" button
        Then the "Logout" button should be "visible"
        Then Verify 'Logged in as Sivasai' is visible
        When I click on "Cart" Button
        Then the product details are :
            | Description | Price   | Quantity | Total   |
            | Men Tshirt  | Rs. 400 | 1        | Rs. 400 |

    # Test Case 21: Add review on product
    Scenario: Add review to the product
        And I click on "Products" button
        And I click on "View Product" button
        Then Verify 'Write Your Review' is visible
        When I enter "Sivasai" on input with placeholder "Your Name"
        When I enter "Sivasai@gmai.com" on input with placeholder "Email Address"
        When I enter "Good product" on input with placeholder "Add Review Here!"
        And I click on "Submit" button
        Then the "Thank you for your review." alert message is displayed
        And I wait for 6 seconds

    #  Add to cart from Recommended items
    Scenario: Add products from recommneded products
        And I scroll the page to the element "recommended_items"
        Then the "recommended items" header is visible
        And I wait for 6 seconds
        When I click on Add to cart button on "Blue Top" product from recomended items section
        And I click on "View Cart" button
        Then the product details are :
            | Description | Price   | Quantity | Total   |
            | Blue Top    | Rs. 500 | 1        | Rs. 500 |
        And I wait for 6 seconds

    Scenario: Verify scrolling up and down
        When I scroll down to footer
        Then the "Subscription" header is visible
        When I scroll up to header
        And I wait for 6 seconds

    Scenario: File Uploading and downloading
        And I click on "Contact us" button
        And I upload a file
        And I wait for 6 seconds
        When I click on "Signup / Login" Button
        Then Verify 'Login to your account' is visible
        And I enter "sivasaikrishna258@gmail.com" on input with placeholder "Email Address" in "Login" section
        And I enter "Sivasai@123" on input with placeholder "Password" in "Login" section
        And I click on "Login" button
        Then the "Logout" button should be "visible"
        Then Verify 'Logged in as Sivasai' is visible
        When I click on "Add to cart" button on "Blue Top" product
        And I click on "View Cart" button
        When I click on "Proceed To Checkout" link
        When I click on "Place Order" link
        And I enter "Sivasai" on input with data-qa "name-on-card"
        And I enter "4352 1234 6753 0093" on input with data-qa "card-number"
        And I enter "123" on input with data-qa "cvc"
        And I enter "05" on input with data-qa "expiry-month"
        And I enter "2026" on input with data-qa "expiry-year"
        And I click on "Pay and Confirm Order" button
        Then Verify "Congratulations! Your order has been confirmed!" is visible
        And I download the invoice
