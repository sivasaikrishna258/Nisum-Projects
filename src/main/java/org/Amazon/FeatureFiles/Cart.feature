Feature: Cart Page Operations

  Scenario: View cart details
    Given User have added products to the cart
    When User view the contents of the cart
    Then '"User" should see the proceed to checkout button'
