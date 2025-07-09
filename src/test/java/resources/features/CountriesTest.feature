Feature: Testing Countries

  Scenario: First Test
    Given I countries api exist
    When I call countries api
    Then I get the response