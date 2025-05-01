
import '@4tw/cypress-drag-drop'


describe('MouseOverOperations', () => {

    it.only("Performing MouseOver", () => {

      cy.visit("https://artoftesting.com/samplesiteforselenium")

    //   cy.get('button.dropbtn').trigger('mouseover')
    
    //   cy.contains('Link1').click()

    cy.get('#menu-item-98').trigger('mouseover').click().should('be.visible')
    cy.get('#menu-item-1005 > a').click({ force: true })
      
    })

    it.skip("Performing Right Click", () => {
      cy.visit("https://the-internet.herokuapp.com/context_menu")

      //performing the right click
        cy.get('#hot-spot').rightclick()
      
        //printing the alert message
        cy.on('window:alert',(t)=>{
            cy.log(t)
           })
     
     
      
    })


    
    it.skip("Performing Double Click", () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")

        // cy.contains('Click Me / Double Click Me!').dblclick()
  
    cy.get('#dblClkBtn').dblclick()
       
       
        
      })

      it.skip("Drag and drop using pulgin", () => {

        cy.visit("https://artoftesting.com/samplesiteforselenium")

        cy.get('#myImage').drag('#targetDiv').should('') 
        
      })

      it.skip("Performing Scrolling", () => {

        cy.visit("https://artoftesting.com/samplesiteforselenium")


        //Scrolling to that particular element
        cy.get('#ConfirmBox > button').scrollIntoView()
        
      })
  })