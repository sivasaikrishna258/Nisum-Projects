describe('Alerts validation', () => {
  it('alerts', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('#alertbtn').click()

    

    cy.on('window:alert',(t)=>{
     console.log(t)
    })
    
    
  })
})