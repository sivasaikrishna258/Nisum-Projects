describe('CheckBoxesAndRadioButtons', () => {
    it("radioButton", () => {

        //visit the website
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //checking the visibility of the radio button
      cy.get("[value='radio2']").should('be.visible')

    //selecting the radio button
     cy.get("[value='radio2']").check()

    
         
    })


    it("checkboxes", () => {

        //visit the website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      
        //check the visibility of the checkbox
        cy.get("input[value='option1']").should('be.visible')

        //selecting the checkbox -option1
         cy.get("input[value='option1']").check().should('be.checked')

         //uncheck the selected checkbox
         cy.get("input[value='option1']").uncheck().should('not.be.checked')

         //checking the all checkboxes
         cy.get(".radioButton").check().should('be.checked')

       
  
      
       
        
      })
  })