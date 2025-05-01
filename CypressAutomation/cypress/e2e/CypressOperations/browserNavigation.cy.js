describe('MouseOverOperations', () => {

    it.only("Performing MouseOver", () => {

      cy.visit("https://artoftesting.com/samplesiteforselenium")

    //   cy.get('button.dropbtn').trigger('mouseover')
    
    //   cy.contains('Link1').click()

    cy.get('#menu-item-98').trigger('mouseover').click().should('be.visible')
    cy.get('#menu-item-1005 > a').click({ force: true })
    cy.go('back')
      
    })
})