const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I navigate to {string}', async function (params) {

    await this.poManager.getLogin().login(params);

})

Then('Verify HomePage is dislayed', async function () {
    await this.poManager.getHomePage().verifyHomePageTitle();

});

When('I click on {string} Button', async function (signUpBtn) {
    await this.poManager.getHomePage().clickOnSignUpButton(signUpBtn)
});

Then('Verify {string} is visible', async function (text) {
    await this.poManager.getSignUpPage().verifyText(text);
});

When('I enter {string} on input with placeholder {string} in {string} section', async function (Name, placeholderName, keyword) {
    await this.poManager.getSignUpPage().enterData(Name, placeholderName, keyword)
});

When('I click on {string} button', async function (buttonName) {
    await this.poManager.getSignUpPage().clickOnButton(buttonName)
});

Then('the {string} header is visible', async function (header) {
    await this.poManager.getSignUpPage().verifyHeaderText(header);
});

When('I {string} the {string} named {string}', async function (keyword, type, value) {

    if (type === "radio") {
        await this.page.locator(`input[type='${type}'][value='${value}']`).check();
    } else if (type === "checkbox") {
        await this.page.locator(`input[type='${type}'][name='${value}']`).check();
        await expect(this.page.locator(`input[type='${type}'][name='${value}']`)).toBeChecked({ timeout: 5000 })
    } else {
        //do nothing
    }
});

When('I enter {string} on input with data-qa {string}', async function (myText, dataTestId) {
    await this.page.locator(`[data-qa='${dataTestId}']`).fill(`${myText}`);

});

Given(`I set {string} combobox to {string}`, async function (label, date) {

    await this.page.locator(`#${label}`).selectOption({ value: date });
});

When(`I enter the below details to fill the form :`, async function (dataTable) {
    const details = dataTable.hashes();

    // details.forEach(async function(data){
    //     await this.page.locator(`[name='${data.name}']`).fill(`data.value`);
    // })

    for (const data of details) {
        await this.page.locator(`[name='${data.name}']`).fill(`${data.value}`);
    }
});

Then('the {string} button should be {string}', async function (buttonName, keyword) {

    if (keyword === "visible") {
        let button = await this.page.getByText(`${buttonName}`);
        await expect(button).toBeVisible();
    } else if (keyword === "not visible") {
        let button = await this.page.getByText(`${buttonName}`);
        await expect(button).not.toBeVisible();
    } else {
        assert(false, `Keyword '${keyword}' does not exist`);
        //it is a manual assertion using Node.js's assert module. It will always fail when executed, and the error message will be:
    }
});

When('I enter {string} on input with placeholder {string}', async function (myText, placeholder) {
    let name = await this.page.getByPlaceholder(`${placeholder}`, { exact: true });
    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();
    await name.fill(myText);
});

Then('I wait for {int} seconds', { timeout: 10000 }, async function (time) {
    await this.page.waitForTimeout(time * 1000);
});

When('I handle the alert', async function () {
    this.page.on("dialog", dialog => dialog.accept());
});

Then('the {string} alert message is displayed', async function (message) {


    const successfulMsg = await this.page.locator("[class*=alert-success]").nth(0);
    await expect(successfulMsg).toBeVisible();
    await expect(successfulMsg).toHaveText(message);
    console.log(await successfulMsg.textContent());
});

Then('Products list is displayed', async function () {
    const produtsList = await this.page.locator(".features_items");
    await expect(produtsList).toBeVisible();
});

When('I click on {string} link from product {int}', async function (linkName, index) {
    const link = await this.page.locator("a", { hasText: linkName });

    await expect(link.nth(index - 1)).toBeEnabled();
    await link.nth(index - 1).click();
});

Then('I am on products details page', async function () {
    const prodtDetails = await this.page.locator(".product-details");
    await expect(prodtDetails).toBeVisible();
});

Then('the following product details should be displayed:', { timeout: 20000 }, async function (dataTable) {
    const productInformation = dataTable.rowsHash();

    const locator = await this.page.locator(".product-information");
    await expect(locator.locator('h2')).toHaveText(productInformation.Name);
    await expect(locator.locator('p').nth(0)).toContainText(productInformation.Category);
    await expect(locator.locator('p').nth(1)).toContainText(productInformation.Availability);
    await expect(locator.locator('p').nth(2)).toContainText(productInformation.Condition);
    await expect(locator.locator('p').nth(3)).toContainText(productInformation.Brand);

});

When('I click on button with id {string}', async function (name) {
    await this.page.locator(`#${name}`).click();
});

Then('all the products related to {string} should be visible', async function (searchTerm) {
    const products = await this.page.$$('.product-image-wrapper p'); // Or suitable selector
    expect(products.length).toBeGreaterThan(0);

    const normalize = (text) => text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const expected = normalize(searchTerm);

    for (const product of products) {
        const text = await product.textContent();
        expect(normalize(text || '')).toContain(expected);
    }
});

When('I scroll down to footer', async function () {

    await this.page.waitForLoadState(); //wait for page to be fully loaded
    await this.page.locator('#footer').scrollIntoViewIfNeeded();
});

When('I hover on the product number {int}', async function (index) {
    await this.page.waitForLoadState(); //wait for page to be fully loaded 
    const product = await this.page.locator(".product-image-wrapper").nth(index - 1);
    await product.hover();
});

Then('Verify cart has {int} products', async function (itemsCount) {
    cartItems = await this.page.locator("#cart_info tbody tr");
    await expect(cartItems).toBeVisible();
    await expect(cartItems).toHaveCount(itemsCount);
});

Then('the product details are :', async function (ProductInfo) {
    const dataTable = ProductInfo.hashes();
    const tableRows = await this.page.locator("table tbody tr");
    await expect(tableRows).toHaveCount(dataTable.length)
    let i = 0;
    for (let row of dataTable) {

        let colText = await tableRows.nth(i).locator("td").nth(1).textContent();
        let col1Text = await tableRows.nth(i).locator("td").nth(2);
        let col2Text = await tableRows.nth(i).locator("td").nth(3);
        let col3Text = await tableRows.nth(i).locator("td").nth(4);

        await expect(colText).toContain(row.Description);
        await expect(col1Text).toHaveText(row.Price);
        await expect(col2Text).toHaveText(row.Quantity);
        await expect(col3Text).toHaveText(row.Total);

        i += 1;

    }
});

When('I set {string} input to {int}', async function (id, quantity) {
    await this.page.locator(`#${id}`).fill(`${quantity}`);
});

When('I click on {string} button on {string} product', async function (buttonName, productName) {

    const productCard = this.page.locator('.product-image-wrapper', {
        has: this.page.locator(`text=${productName}`)
    });

    let buttonLocator;

    if (buttonName.toLowerCase() === 'add to cart') {
        buttonLocator = productCard.locator('a.add-to-cart');
    } else if (buttonName.toLowerCase() === 'view product') {
        buttonLocator = productCard.locator('a', { hasText: 'View Product' });
    } else {
        throw new Error(`Button "${buttonName}" not recognized.`);
    }

    await buttonLocator.first().click();
});

When('I remove the {string} product from cart', async function (productName) {

    const row = this.page.locator("tr",
        { has: this.page.locator("a", { hasText: productName }) });

    await expect(row.locator("td").nth(5)).toBeEnabled();
    await row.locator("td").nth(5).locator("a").click({ force: true });
});

When('I click on {string} link', async function (linkText) {
    await this.page.locator("a", { hasText: linkText }).click({ timeout: 5000 });
});

Then('the {string} address content is', async function (keyword, dataTable) {
    const dataTableHashes = dataTable.hashes();
    let address;
    if (keyword === "delivery") {
        address = await this.page.locator("#address_delivery li");
    } else if (keyword === "billing") {
        address = await this.page.locator("#address_invoice li");
    } else {
        throw new Error(`keyword "${keyword}" not recognized.`);
    }
    await Promise.all(
        dataTableHashes.map(async (row, index) => {
            await expect(address.nth(index + 1)).toHaveText(row.Address);
        })
    )

});

When('I expand {string} category', async function (category) {
    await this.page.locator(`[href *= '${category}']`).scrollIntoViewIfNeeded();
    await this.page.locator(`[href *= '${category}']`).waitFor();
    await this.page.locator(`[href *= '${category}']`).click();
});

When('I click on {string} category under {string} section in the sidebar', async function (subCategory, categoryName) {

    await this.page.locator(`#${categoryName} a`, { hasText: subCategory }).waitFor();
    await expect(await this.page.locator(`#${categoryName} a`, { hasText: subCategory })).toBeVisible();
    await this.page.locator(`#${categoryName} a`, { hasText: subCategory }).click();

});

Then('the {string} header is visible with related products displayed', async function (headerName) {
    await this.poManager.getSignUpPage().verifyHeaderText(headerName);
    const products = await this.page.locator(".features_items .col-sm-4");
    let count = await products.count();
    console.log(count);

    for (let i = 0; i < count; i++) {
        await products.nth(i).waitFor();
        expect(await products.nth(i).isVisible()).toBeTruthy();
        await expect(await products.nth(i)).toBeVisible();
    }
});

When('I click on {string} brand', async function (brand) {
    await this.page.locator(`[href *= '${brand}']`).scrollIntoViewIfNeeded();
    await this.page.locator(`[href *= '${brand}']`).waitFor();
    await this.page.locator(`[href *= '${brand}']`).click();
});

Then('I scroll the page to the element {string}', async function (element) {

    await this.page.waitForLoadState();
    await this.page.locator(`.${element}`).scrollIntoViewIfNeeded();
    await this.page.locator(`.${element}`).waitFor();
});

When('I click on Add to cart button on {string} product from recomended items section', function (productName) {
    const section = this.page.locator(".recommended_items");
    const buttonLocator = section.locator('.product-image-wrapper', {
        has: this.page.locator(`text=${productName}`)
    });
    buttonLocator.locator('a.add-to-cart').waitFor();
    buttonLocator.locator('a.add-to-cart').click();

});

When('I scroll up to header', async function () {
    await this.page.waitForLoadState();
    await this.page.locator(".header-middle").scrollIntoViewIfNeeded();
});

Then('I upload a file', async function () {
    const file = this.page.locator('input[type="file"]');
    file.setInputFiles("C:/Users/sadvanapu/Downloads/Advanapu Sivasa krishna_Resume.pdf");
});

Then('I download the invoice', async function () {
    
    const downloadPromise = this.page.waitForEvent("download");
    await this.page.locator('text="Download Invoice"').click();
    const download = await downloadPromise;

    await download.saveAs('C:/Users/sadvanapu/Downloads/' + download.suggestedFilename());


});