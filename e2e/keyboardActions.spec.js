import { test, expect, chromium } from '@playwright/test';

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