// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" /> 


Cypress.Commands.add('getIframeBody', (iframeSelector) => {
     cy.get(iframeSelector) // Get the iframe
      .its('0.contentDocument.body') // Get the iframe's body
      .should('be.visible') // Ensure the body is visible
      .then(cy.wrap).find('input[type="text').type('siva'); // Wrap the body so we can use Cypress commands
  });


  Cypress.Commands.add('clickLink', (label) => {
    cy.get('.suggestion-title').contains(label).click()
  });

  Cypress.Commands.add('clickOnBrand', (label) => {
    cy.xpath('//div[@id="brandsRefinements"]//span[@class="a-size-base a-color-base"]').contains(label).click()
});

  Cypress.Commands.add('Assert', (label) => {
    cy.xpath('//a[@class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')
    .should('contain',label)  });