Feature: Product Search and Filtering

  Scenario: User searches for a product and applies filters

    Given the user is on the Amazon homepage
    When the user searches for "laptops"
    And the user clicks the search button
    Then the search results page should display products related to "laptops"
    When the user applies a price filter of "$500 to $1000"
    And the user applies a brand filter for "Dell"
    And the user applies an OS filter for "Windows 10"
    Then the search results should update to show products priced between $500 and $1000
    And the products should be from the brand "Dell"
    And the products should have "Windows 10" as the operating system
