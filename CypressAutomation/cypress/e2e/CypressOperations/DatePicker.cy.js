

describe('DatePicker', () => {
    it('Pick the date', () => {
      cy.visit("https://www.irctc.co.in/nget/train-search")

      
      cy.get('.ui-calendar > .ui-inputtext').click()

      cy.get('.ui-datepicker-month').then(month =>{

   
        if(month.text()=='Octobr'){
            cy.get('td[class="ng-tns-c58-10 ng-star-inserted"]').contains('22').click()
           

        }else{
            cy.get('.ui-datepicker-next-icon').click()

            cy.get('td[class="ng-tns-c58-10 ng-star-inserted"]').contains('22').click()
        }
     
      })
    
      
    })
  })