describe('Assertions', () => {
    it.only('Implicit Assertion', () => {


      cy.visit("http://www.automationpractice.pl/index.php")

      //one way to do assertion
      cy.url().should('include','index')
      cy.url().should('eq','http://www.automationpractice.pl/index.php')
      cy.url().should('contain','automation')

    //another way to do assertion

    cy.url().should('include','index')
    .should('eq','http://www.automationpractice.pl/index.php')
    .should('contain','automation')
      

    cy.url().should('include','index')
    .and('eq','http://www.automationpractice.pl/index.php')
    .and('contain','automation')

    cy.title().should('eq','My Shop')

    cy.get('#search_query_top').should('be.visible').and('exist')

    cy.xpath('//a').should('have.length','88')

    cy.xpath('//b[text()="Cart"]').invoke('text').as('cartText').should('eq','Cart')
      
    })


    it('Explicit Assertion', () => {


        cy.visit("http://www.automationpractice.pl/index.php")

        cy.get('.header_user_info').find('a').invoke('text').as('labelText').should('not.eq','Sign in') // Get the text content

        cy.get('.header_user_info').find('a').then(x=>{

        let expName=x.text()

        let cleanedText=expName.replace(/\s+/g, ' ').trim()
        /*
        text.replace(/\s+/g, ' '): Replaces one or more whitespace characters (spaces, tabs, newlines) with a single space.
        .trim(): Removes any leading or trailing whitespace from the resulting string.
        */

        expect(cleanedText).equal('Sign in')

  })
 

        
      })
  })