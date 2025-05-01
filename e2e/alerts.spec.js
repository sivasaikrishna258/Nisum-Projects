/**
 * By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
   However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

 * Alert Box (alert) — Just shows a message with "OK" button.
 * 
 * Confirm Box (confirm) — Shows a message with "OK" and "Cancel" buttons, expects a decision (true/false).
 * 
 * Prompt Box (prompt) — Shows a message with a text input field for the user to enter something.
 */

import { test, expect, chromium } from '@playwright/test';

test('Handling alerts', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //for click on Ok
    page.on('dialog', dialog => dialog.accept());
    await page.getByText('Click for JS Alert').click();

    //for click on both cancel and ok
    page.on('dialog', dialog => dialog.dismiss());
    await page.getByText('Click for JS Confirm').click();

    //entering text into the alert box
    page.on('dialog', async dialog => {
        console.log(dialog.type());
        await dialog.accept('siva');
    });
    await page.getByText('Click for JS Prompt').click();

    await page.waitForTimeout(10000);


});