import test from "node:test";


/**
 * When you use **textContent()** in Playwright, it returns all the text inside the selected element — including:

Text inside child elements

Text from elements that are hidden

Text that's not visibly rendered, like display: none, visibility: hidden

but innerText() will return only the text that is visible to the user, excluding hidden elements and text.
 */
test("Input tag", async ({ page }) =>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    
   await page.locator('#mousehover').fill('Mouse Hover').selectText();
   await page.locator('#mousehover').clear();
    
   // selectText() will select the text in the input field like Ctrl+A

   await page.locator('#mousehover').innerText();
    // innerText() will return the text inside the input field

    await page.locator('#mousehover').textContent();
    // textContent() will return the text inside the input field, including HTML tags if any



   
});