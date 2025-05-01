describe('Handling tabs', () => {
    it('Handling child tabs approach1', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")//parent tab
  
      cy.contains('Open Tab').then( (childTab) =>{

        //extracting the value of href property
        let url=childTab.prop('href')

        //navigating to child tab
        cy.visit(url)
      })
      
      
    })


    it.only('Handling child tabs approach2', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")//parent tab
    
        //removing the target attribute to open the link in same tab
        cy.contains('Open Tab').invoke('removeAttr','target').click()

        //navigating back to the parent tab
        cy.go('back')
        
      })
  })