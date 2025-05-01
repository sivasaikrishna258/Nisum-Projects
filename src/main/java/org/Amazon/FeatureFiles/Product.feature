Feature: Product Page Interaction

#  Scenario: View product details
#    Given I am on the product page of a "laptop"
#    When I view the details of the product
#    Then I should see the product name, price, and description

  Scenario: Add product to cart
    Given User is on the product page of a "iphone"
    When User can add the product to the cart
    Then the product should be added successfully to the cart
