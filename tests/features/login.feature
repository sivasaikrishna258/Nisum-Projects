@smoke
Feature: Login Functionality

    Scenario: Verify Succesful login with valid credentials
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed
        When I click on "Signup / Login" Button
        Then Verify 'Login to your account' is visible
        And I enter "sivasaikrishna258@gmail.com" on input with placeholder "Email Address" in "Login" section
        And I enter "Sivasai@123" on input with placeholder "Password" in "Login" section
        And I click on "Login" button
        Then the "Logout" button should be "visible"
        Then Verify 'Logged in as Sivasai' is visible

    Scenario: Verify login with invalid credentials
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed
        When I click on "Signup / Login" Button
        Then Verify 'Login to your account' is visible
        And I enter "sivasaikrishna258@gmail.com" on input with placeholder "Email Address" in "Login" section
        And I enter "Sivasai@1234" on input with placeholder "Password" in "Login" section
        And I click on "Login" button
        Then Verify 'Your email or password is incorrect!' is visible

    Scenario: Verify login and logout
        Given I navigate to "https://automationexercise.com/"
        Then Verify HomePage is dislayed
        When I click on "Signup / Login" Button
        Then Verify 'Login to your account' is visible
        And I enter "sivasaikrishna258@gmail.com" on input with placeholder "Email Address" in "Login" section
        And I enter "Sivasai@123" on input with placeholder "Password" in "Login" section
        And I click on "Login" button
        Then the "Logout" button should be "visible"
        And I click on "Logout" button
        Then Verify 'Login to your account' is visible
        Then Verify 'New User Signup!' is visible

