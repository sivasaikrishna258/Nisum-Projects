Feature: Automation Exercise SignUp

    # Scenario: New user registration
    #     Given I navigate to "https://automationexercise.com/"
    #     Then Verify HomePage is dislayed
    #     When I click on "Signup / Login" Button
    #     Then Verify 'New User Signup!' is visible
    #     When I enter "sivasai" on input with placeholder "Name" in "Signup" section
    #     And I enter "sivasaikrishna258@gmail.com" on input with placeholder "Email Address" in "Signup" section
    #     And I click on "Signup" button
    #     Then the "Enter Account Information" header is visible
    #     When I "check" the "radio" named "Mr"
    #     And I enter "Sivasai@123" on input with data-qa "password"
    #     And I set "days" combobox to "5"
    #     And I set "months" combobox to "5"
    #     And I set "years" combobox to "2000"
    #     And I "check" the "checkbox" named "newsletter"
    #     And I enter the below details to fill the form :
    #         | name          | value      |
    #         | first_name    | siva       |
    #         | last_name     | sai        |
    #         | company       | Nisum      |
    #         | address1      | Knodapur   |
    #         | address2      | Hyd        |
    #         | state         | AP         |
    #         | city          | Nellore    |
    #         | zipcode       | 524408     |
    #         | mobile_number | 9121645063 |
    #     And I set "country" combobox to "India"
    #     And I click on "Create Account" button

    # Then the value from the country dropdrown is "India"

    Scenario: User registration with existing account
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed
        When I click on "Signup / Login" Button
        Then Verify 'New User Signup!' is visible
        When I enter "sivasai" on input with placeholder "Name" in "Signup" section
        And I enter "sivasaikrishna258@gmail.com" on input with placeholder "Email Address" in "Signup" section
        And I click on "Signup" button
        Then Verify 'Email Address already exist!' is visible


    Scenario: Verify the billing and delivery address
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed
        When I click on "Signup / Login" Button
        Then Verify 'New User Signup!' is visible
        When I enter "sivasai" on input with placeholder "Name" in "Signup" section
        And I enter "sivasaikrishna2589@gmail.com" on input with placeholder "Email Address" in "Signup" section
        And I click on "Signup" button
        Then the "Enter Account Information" header is visible
        When I "check" the "radio" named "Mr"
        And I enter "Sivasai@123" on input with data-qa "password"
        And I set "days" combobox to "5"
        And I set "months" combobox to "5"
        And I set "years" combobox to "2000"
        And I "check" the "checkbox" named "newsletter"
        And I enter the below details to fill the form :
            | name          | value      |
            | first_name    | siva       |
            | last_name     | sai        |
            | company       | Nisum      |
            | address1      | Knodapur   |
            | address2      | Hyd        |
            | state         | AP         |
            | city          | Nellore    |
            | zipcode       | 524408     |
            | mobile_number | 9121645063 |
        And I set "country" combobox to "India"
        And I click on "Create Account" button
        And I click on "Continue" button
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
        And the "billing" address content is
            | Address           |
            | Mr. siva sai      |
            | Nisum             |
            | Knodapur          |
            | Hyd               |
            | Nellore AP 524408 |
            | India             |
            | 9121645063        |
        And I click on "Delete Account" button
