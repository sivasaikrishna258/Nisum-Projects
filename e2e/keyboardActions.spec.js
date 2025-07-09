import { test, expect, chromium } from '@playwright/test';
/** //* we can perform keyboard actions along with the locator object
 // Hit Enter
await page.getByText('Submit').press('Enter');

// Dispatch Control+Right
await page.getByRole('textbox').press('Control+ArrowRight');

// Press $ sign on keyboard
await page.getByRole('textbox').press('$');
 */
test('all keyboard actions', async ({page}) => {
   
    //for combination of keys
    await page.goto("https://demoqa.com/text-box");
    // await page.getByPlaceholder("Full Name").fill("siva")
    // await page.keyboard.press("Control+A")
    // await page.keyboard.press("Control+c")

    // await page.getByPlaceholder("name@example.com").click()
    // await page.keyboard.press("Control+v")

    //for single key
    await page.getByPlaceholder("Current Address").fill("siva")
    await page.keyboard.down("Enter")
    await page.pause()
});