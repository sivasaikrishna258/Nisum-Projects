



describe('CSSLocator', () => {

    it("csslocator", () => {
      cy.visit("http://www.automationpractice.pl/index.php")
     cy.get("#search_query_top").type("shoes")
     cy.get("[name='submit_search']").click() 
      
    })

    it.only("using contains method", () => {
      cy.visit("http://www.automationpractice.pl/index.php")
   cy.contains('Women').click()
    })


    it.only("using nth method", () => {
      cy.visit("http://www.automationpractice.pl/index.php")
      
    })
  })