
describe('XpathLocator', () => {
    it("xpathlocator", () => {
      cy.visit("http://www.automationpractice.pl/index.php")

      cy.xpath("//input[@name='search_query']").type("bags")
     
      
    })
  })