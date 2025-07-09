import { test, expect } from '@playwright/test';

test('handling tooltips', async ({page}) => {
await page.goto("https://practice.expandtesting.com/tooltips");

const tooltip= page.locator('#btn1');
tooltip.hover();
await expect(tooltip).toHaveAttribute("aria-describedby").toHaveText("Tooltip on top")
await expect(tooltip).toHaveText("Tooltip on top")


// await page.pause()
});