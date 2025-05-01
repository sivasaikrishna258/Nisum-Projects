describe('Hnadling custom command', () =>{
    it('Performing click action based on the text that we are passing' , () =>{

        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").click().type('delhi')


        cy.clickLink('University');


    })
})