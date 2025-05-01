
Feature: Search Functionality

Scenario: Perform a basic search
Given I am on the homepage
When I search for "iphone"
Then I should see search results related to "iphone"