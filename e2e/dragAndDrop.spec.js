
import { test, expect, chromium } from '@playwright/test';


test('drag and drop operation', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');

    const sourceItem = page.locator('#myImage');

    const targetItem = page.locator('#targetDiv');

    //with direct method
    // await sourceItem.dragTo(targetItem);

    //doing mannualy
    await sourceItem.hover();
    await page.mouse.down();
    await targetItem.hover();
    await page.mouse.up();
});