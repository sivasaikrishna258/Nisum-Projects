describe('Amazon website testing', ()=>{


    beforeEach('Navigated to Amazon Website', () => {
    
        //If we want to proceed even when receiving non-2xx status codes, we can configure cy.visit() to not fail on such status code
    cy.visit('https://www.amazon.in/',{ failOnStatusCode: false })

    })

    it('Search Functionality', () =>{

        var brand="HP";

          //enter text into searchbar , type laptops and click on enter
          cy.get('#twotabsearchtextbox').type('laptops{enter}')

        //Validate that the search results page displays products related to the laptops
        cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')
          .should('contain','Laptop')

        //mouseover on the sponsured tooltip
          cy.xpath('(//span[@class="aok-inline-block puis-sponsored-label-info-icon"])[1]')
          .trigger('mouseover')
          .click();

          //get the text of the tooltip and validate
          cy.get('#a-popover-content-2 > .puis > :nth-child(1)').invoke('text').should('eq','You are seeing this ad based on the product’s relevance to your search query.')

          //click on the brands checkboxes
            cy.clickOnBrand(brand);


          //Validate that the search results page after filter and it should displays products accoding to the filter
            cy.Assert(brand)
    })

    it('End to End flow of the checkout process', ()=>{

        //enter text into searchbar and enter laptops
        cy.get('#twotabsearchtextbox').type('laptops{enter}')

        //click on any product from product listing page in same tab itself
        cy.xpath('(//a[@class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"])[1]').invoke('removeAttr','target').click()
        
        //click on add to cart button
        cy.xpath('(//input[@id="add-to-cart-button"])[2]').scrollIntoView().should('be.visible').click()

        cy.wait(5000)

        //clcik on cart button
        cy.xpath('//span[@id="attach-sidesheet-view-cart-button"]').click()

        //click on procedd to checkout button
        cy.xpath('//input[@name="proceedToRetailCheckout"]').click()
        
    })



    it('Verify the Visibility of Checkout Button after Products removal from the Cart Page', () => {

        //enter text into searchbar and enter laptops
        cy.get('#twotabsearchtextbox').type('laptops{enter}')

        //click on any product from product listing page in same tab itself
        cy.xpath('(//a[@class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"])[1]').invoke('removeAttr','target').click()
        
        //click on add to cart button
        cy.xpath('(//input[@id="add-to-cart-button"])[2]').scrollIntoView().should('be.visible').click()

        cy.wait(5000)

        //clcik on cart button
        cy.xpath('#attach-sidesheet-view-cart-button').click()

        //Click on delete button to remove the cart items
        cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()

        //Validate that the proceed to checkout button is not visible to user
        cy.xpath('//input[@name="proceedToRetailCheckout"]').should('not.be.visible')


    })

    it.only('Verify the quantity update', () => {

        //enter text into searchbar and enter laptops
        cy.get('#twotabsearchtextbox').type('laptops{enter}')

       //click on any product from product listing page in same tab itself
       cy.xpath('(//a[@class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"])[1]').invoke('removeAttr','target').click()
        
        //clcik on quantity update button
        cy.get('#a-autoid-4-announce > .a-dropdown-prompt').scrollIntoView().click()

        let quantityText;

        //select the quantity from dropdown
        cy.get('#quantity_3').then( $el =>{

             quantityText=$el.text().replace(/\s+/g, ' ').trim();
            cy.log(quantityText)

            cy.wrap($el).click()
            cy.get('#a-autoid-4-announce > .a-dropdown-prompt').should('contain',quantityText)

            this.data1=quantityText


        })
        //select the quantity from dropdown
       // cy.get('#quantity_1').click()

    //   cy.log(data1)

        //click on add to cart button
        // cy.xpath('(//input[@id="add-to-cart-button"])[2]').scrollIntoView().should('be.visible').click()

        cy.wait(5000)

        //clcik on cart button
        // cy.xpath('//span[@id="attach-sidesheet-view-cart-button"]').click()



    })
})