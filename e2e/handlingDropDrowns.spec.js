import { test, expect, chromium } from '@playwright/test';

/**
 * * Single selection matching the value or label
await page.getByLabel('Choose a color').selectOption('blue');

//* Single selection matching the label
await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });

//* Multiple selected items
await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);
 */
test('handling dropdrowns', async ({ page }) => {

    /**
     * if u want to select multiple elements from drop drown then you shoul use like this
     *  await page.selectOption('select#dropdown-class-example',['text1','text2',etc])
     */
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //with select tag
    await page.selectOption('select#dropdown-class-example', { value: 'option1' });

    await page.selectOption('select#dropdown-class-example', { label: 'Option2' });// based on label same we can do is
    // await page.locator('select#dropdown-class-example').selectOption("Option2");// based on visible text. so both works in the same way

    await page.selectOption('select#dropdown-class-example', { index: 3 });

    //without select tag one approach
    await page.goto('https://www.wikipedia.org/');

    const searchInput = page.locator('#searchInput');
    await searchInput.click();  // Click on the search input
    await searchInput.fill('delhi');  // Type 'delhi'

    const suggestion = await page.locator('.suggestion-title:text("Metro")');
    await suggestion.click();  // Click the suggestion that contains 'Metro'

    //without select tag another approach
    await page.goto('https://www.wikipedia.org/');

    const searchInput1 = await page.locator('#searchInput');
    await searchInput1.click();  // Click on the search input
    await searchInput1.fill('delhi');  // Type 'delhi'

    await page.waitForSelector('.suggestion-title')//waiting for the locators to be displayed

    const suggestion1 = await page.$$('.suggestion-title');
    for (let seat of suggestion1) {
        if (await seat.innerText() === "Delhi") {
            await seat.click();
            break;
        }
    }



});

test('handling bootstrap dropdrowns', async ({ page }) => {
    //jquery drop drown means the drop drown will show only after cicking
   
    await page.goto('https://www.irctc.co.in/nget/train-search');
    await page.locator("#journeyClass").click();

    const allClasses=await page.$$('ul[role="listbox"] li');

    console.log(allClasses.length); // Log the number of items


    for(let seat of allClasses){

        if (await seat.innerText()==="Anubhuti Class (EA)") {
            await seat.click();
            break;
        }
    }

});

/**
 * difference between $$ and locator
 * $$ returns an array of elements matching the selector, while locator() returns a single locator object that can be used to interact with the element.
 * $$ is useful when you want to get multiple elements and perform actions on each of them, while locator() is useful when you want to interact with a specific element.
 */