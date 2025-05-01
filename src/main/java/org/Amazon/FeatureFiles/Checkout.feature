Feature: Checkout Process

  Scenario: Proceed to checkout
    Given I have products in my cart
    When I proceed to checkout
    Then I should be on the checkout page
    And I should see options for shipping and payment