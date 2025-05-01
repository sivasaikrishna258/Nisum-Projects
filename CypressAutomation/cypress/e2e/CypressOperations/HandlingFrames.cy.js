
import 'cypress-iframe';


describe('Handling frames ', () => {

    it("handling frames approach1", () => {
      cy.visit("https://demo.automationtesting.in/Frames.html")


      //getting the frame and store it in a variable
      let frame=cy.get('#singleframe')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)

      frame.find('input[type="text').type('siva')
     
      
    })

    it("handling frames using custom command", () => {

        cy.visit("https://demo.automationtesting.in/Frames.html")
  
  
        cy.getIframeBody('#singleframe')
  
        // getIframeBody.find('input[type="text').type('siva')
       
        
      })


      it.only("handling frames using iframe plugin", () => {

        cy.visit("https://demo.automationtesting.in/Frames.html")
  
  
        cy.frameLoaded('#singleframe');

        cy.iframe('#singleframe').find('input[type="text').type('sivasaikrishna')
  
        // getIframeBody.find('input[type="text').type('siva')
       
        
      })
  })