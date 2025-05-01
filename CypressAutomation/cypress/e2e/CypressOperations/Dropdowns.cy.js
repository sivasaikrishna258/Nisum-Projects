describe('dropdown with and without select tag', () => {
    it('dropdown with Select tag', () => {


      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //select value from drop down with select tag
      cy.get('#dropdown-class-example')
      .select('option1')
      .should('have.value','option1')


    //select value from dropdown without select tag(autosuggestion)
    cy.get('#autocomplete')
    .click()
    .type('Italy')
    .type('{downArrow}')
    .type('{enter}')

      
    })
    

        it('Autosuggestion dropdown', () => {
          cy.visit("https://www.wikipedia.org/")
          cy.get("#searchInput").click().type('delhi')

          cy.get('.suggestion-title').contains('Metro').click()

        
          
        })

        it.only('Dynamic dropdown', () => {
            cy.visit("https://www.wikipedia.org/")

            cy.get("#searchInput").click().type('delhi')

            cy.get('.suggestion-title').each(($el, index, $list) => {

                //printing all the names
                cy.log($el.text())

                // $el is a wrapped jQuery element
                if ($el.text() == 'Delhi Metro') {
                //   // wrap this element so we can
                //   // use cypress commands on it
                  cy.wrap($el).click()
                } 

              })
  
          
            
          })
      
  })