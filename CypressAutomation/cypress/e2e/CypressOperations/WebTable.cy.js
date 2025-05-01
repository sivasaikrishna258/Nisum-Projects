describe('Handling WebTable', () => {
    it('get the Element from web table', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //get the 1st cloumn data of 2nd row
      cy.get('table[name="courses"]').find('tr').eq(1).find('td').eq(0).then(courseName =>{
        

        console.log(courseName.text().trim())


        cy.get('table[name="courses"]').find('tr').eq(1).find('td').eq(0).invoke('text').as('courseName')
        console.log('@courseName')
      })

    })
      it.only('get the each coloumn Element from each row', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('table[name="courses"]>tbody>tr').each(($row, index, $rows) =>{
            cy.wrap($row).within(  ()=>{
                cy.find('td').each(($col, index, $cols) =>{

                    cy.log($col.text())

                })
            })
        })
  
        
      
      
      
      
    
  })
})