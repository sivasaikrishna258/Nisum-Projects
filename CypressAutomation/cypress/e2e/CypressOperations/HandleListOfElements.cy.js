describe('accessing the lists of elemnets', () => {
  it('printing the text of each element in list', () => {

    let te
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

   


    cy.xpath('//div[@class="tableFixHead"]//table//tbody//tr[1]//td').each(($el, index, $list) => {

      //printing all *(the names
      cy.log($el.text())

    })
    
    cy.xpath('//div[@class="tableFixHead"]//table//tbody//tr[1]//td').then($elements => {

       te=$elements
       cy.wrap(te).each(($el, index) => {


        //printing all *(the names
      cy.log($el.text())
      })
     
    })

    // cy.log(te)

    //  te.each((index,$ele) => {
    //     cy.log($ele.text)
    //   })
    // te.forEach(element => {
    //   cy.log(element.text())
    // });


    
    // .each(($el, index, $list) => {

  
    //   cy.log($e);
    // })

      // $elements is a jQuery object containing all matched elements
    //   $values.each((index, $element) => {
    //     const text =$element.text // Get the text content
    //     cy.log(`Element ${index + 1}:${text}`);
    //   // console.log(text)

      
    // })

    // options.array.forEach(element => {
    //   console.log(element);

    // for(let x in options){
    //   console.log(x);
    
    
    
    
  })
})