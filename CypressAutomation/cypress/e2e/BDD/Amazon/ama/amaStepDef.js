// import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Given("user is on amazon homepage" , () =>{
//     cy.visit('https://www.amazon.in/',{ failOnStatusCode: false })

// })

// When("user enter text and click on search button", () => {
//     cy.get('#twotabsearchtextbox').type('laptops{enter}')
// });

// Then("user should see the products", () => {
//     cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')
//     .should('contain','Laptop')
// });
/******************************************************************************************************************/

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on the Amazon homepage', () => {
  cy.visit('https://www.amazon.in');
});

When('the user searches for {string}', (product) => {
  cy.get('#twotabsearchtextbox').type(product);
});

When('the user clicks the search button', () => {
  cy.get('#nav-search-submit-button').click();
});

Then('the search results page should display products related to {string}', (product) => {
  cy.contains(product).should('be.visible');
});

When('the user applies a price filter of {string}', (priceRange) => {
  cy.get('#low-price').type(priceRange.split(' ')[0].replace('$', '')); // Enter low price
  cy.get('#high-price').type(priceRange.split(' ')[2].replace('$', '')); // Enter high price
  cy.get('.a-button-input[type="submit"]').click(); // Click the apply button
});

When('the user applies a brand filter for {string}', (brand) => {
    cy.xpath('//div[@id="brandsRefinements"]//span[@class="a-size-base a-color-base"]').contains(brand).click()
});

When('the user applies an OS filter for {string}', (os) => {
  cy.get('[aria-labelledby ="p_n_feature_twenty-three_browse-bin-title"] span span li span a span').contains(os).click(); // Check the OS checkbox
});

Then('the search results should update to show products priced between {string}', (priceRange) => {
  const [low, high] = priceRange.split(' to ').map(p => parseFloat(p.replace('$', '')));
  cy.get('.s-main-slot .s-result-item').each(($el) => {
    cy.wrap($el).find('.a-price-whole').invoke('text').then((text) => {
      const price = parseFloat(text.replace(',', ''));
      expect(price).to.be.gte(low).and.be.lte(high);
    });
  });
});

Then('the products should be from the brand {string}', (brand) => {
//   cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').each(($el) => {
//     cy.wrap($el).invoke('text').should('include', brand);
//   });
cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').should('contain',brand)
});

Then('the products should have {string} as the operating system', (os) => {
    // cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').each(($el) => {
    //     cy.wrap($el).invoke('text').should('include', os);
    //   });

        cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').should('contain',os)

});


/********************************************************************************************************************************** */

let product;
When('the user clicks on the first product in the search results',() =>{
    cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(5).then($el =>{
        product=$el.text();
        cy.log(product)
        cy.wrap($el).invoke('removeAttr','target').click()
    })


});

When('the user clicks the {string} button',(addToCartBtn) =>{
    cy.get('#add-to-cart-button').click()

    cy.wait(5000)
})

Then ('a confirmation message should appear',()=>{
cy.contains('Added to Cart').invoke('text').should('contain','Added to Cart')
});

Then('the cart should reflect the added product',()=>{
    cy.get('#attach-sidesheet-view-cart-button').click()
    // cy.get('.a-text-normal > .a-truncate > .a-truncate-cut').then( cartItem =>{

    //     // cy.wrap(cartItem.text()).should('have.text',product)

    //     // product.should('contain',cy.wrap(cartItem.text()))

    //     var cartItemText=cartItem.text();
    //     // expect(product).to.match('/^'+cartItemText+'/');
    //     expect(product).to.have.value(cartItemText);

    //     // expect(cartItem.text()).to.(product)
    // })

    // cy.get('.a-text-normal > .a-truncate > .a-truncate-cut').should('contain',product)
});
/************************************************************************************************************************** */


When ('the user navigates to the shopping cart page',()=>{

              cy.get('#nav-cart-count-container').click()

    // cy.get('span[id="attach-sidesheet-view-cart-button"]').then($element => {
    //     if ($element.is(':visible')) {
    //       // Click the element if it is visible
    //       cy.wrap($element).click();
    //     } else {
    //       // Otherwise, click the fallback element
    //       cy.get('#attach-close_sideSheet-link').click();
    //       cy.get('nav-cart-count-container').click()

    //     }
    //   });

})

Then ('the user should not be able see proceed to checkout button',() =>{
    cy.get('input[name="proceedToRetailCheckout"]').should('not.exist')

})

Then ('the user should see a message indicating the cart is empty',()=>{
cy.get('h2').invoke('text').then((text) => {
    // Normalize the text by trimming whitespace and ensuring case-insensitivity
    const normalizedText = text.trim(); // Trim any extra spaces
    expect(normalizedText).to.include('Your Amazon Cart is empty'); // Assert that it includes the expected message
  });
});

/********************************************************************************************************************************* */

Then("the user should be able to proceed to checkout",  () =>{
    cy.xpath('//input[@name="proceedToRetailCheckout"]').click()

    });

    Then ('the user should see a Sign in Page',() =>{
        cy.get('.a-padding-extra-large > .a-spacing-small').should('be.visible')
    })


/********************************************************************************************************************************* */

When('the user clicks the Add to Cart button',()=>{
cy.get('div div span span span #add-to-cart-button').click()
}); 



let quantityText;
When('the user updates the quantity of the product to {string}',(quantity)=>{

   cy.contains('Quantity:').parent().click()
    // cy.get('#a-autoid-2-announce').scrollIntoView().click()

    cy.get('div[class="a-popover-wrapper"] div ul li').then( $el =>{

       quantityText=quantity;
        // quantityText=$el.text().replace(/\s+/g, ' ').trim();
       cy.log(quantityText)

       cy.wrap($el).eq(quantity-1).click()
    })
})
Then('the shopping cart should reflect the updated quantity of {string}',(cartQuantity)=>{

    cy.get('.a-dropdown-prompt').invoke('text').should('eql',cartQuantity)
})

Then('the total price should be updated accordingly',()=>{
cy.get('span[class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]').invoke('text').then($price=>{
    var subtotal=$price.replace(/,/g, '') * quantityText

    // cy.log(subtotal)
    cy.get('span[class="a-size-medium a-color-base sc-price sc-white-space-nowrap"]').eq(1).invoke('text').then($total=>{
        cy.log($total)
        expect(parseFloat($total.replace(/,/g, '').trim())).equal(subtotal)
    })
})
})











