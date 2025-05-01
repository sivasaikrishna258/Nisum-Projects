describe('Hooks IMplementation', ()=>{

    before(() =>{
        cy.log('before all it block')
    })

    beforeEach(() =>{
        cy.log('before each it block')
    })

    it('hooks',() =>{
    cy.log('1st it block')
    })

    it('hooks1',() =>{
        cy.log('2nd it block')

    })

    it('hooks2',() =>{
        cy.log('3rd it block')

    })

    after(() =>{
        cy.log('before all it block')
    })

    afterEach(() =>{
        cy.log('before each it block')
    })
})