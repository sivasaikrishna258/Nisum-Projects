/**
 * By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
   However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

 * Alert Box (alert) — Just shows a message with "OK" button.
 * 
 * Confirm Box (confirm) — Shows a message with "OK" and "Cancel" buttons, expects a decision (true/false).
 * 
 * Prompt Box (prompt) — Shows a message with a text input field for the user to enter something.
 */

   //* use case of "on"
/**
 * 
 *The page.on(event, callback) method lets you listen for browser events like dialogs, console logs, page errors, etc.

📌 Syntax:

page.on('eventName', callbackFunction);


| Event Name    | Description                                 | Example Use                                             |
| ------------- | ------------------------------------------- | ------------------------------------------------------- |
| `'dialog'`    | Triggered on alerts, confirms, prompts      | `page.on('dialog', dialog => dialog.dismiss())`         |
| `'console'`   | Captures `console.log()` from the page      | `page.on('console', msg => console.log(msg.text()))`    |
| `'pageerror'` | Catches unhandled JavaScript errors on page | `page.on('pageerror', error => console.error(error))`   |
| `'request'`   | Fired when a network request is made        | `page.on('request', req => console.log(req.url()))`     |
| `'response'`  | Fired when a response is received           | `page.on('response', res => console.log(res.status()))` |
| `'load'`      | When the page fully loads                   | `page.on('load', () => console.log('Page loaded'))`     |

    */
import { test, expect, chromium } from '@playwright/test';

test('Handling alerts', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //for click on Ok
    page.on('dialog', dialog => dialog. accept()); //here dialog is a function which accepts the dialog box and we can also write page.on('dialog',(dialog) => { dialog.accept(); });
    await page.getByText('Click for JS Alert').click();

    //for click on both cancel and ok
    page.on('dialog', dialog => dialog.dismiss());
    await page.getByText('Click for JS Confirm').click();

    //entering text into the alert box
    page.on('dialog', async dialog => {
        console.log(dialog.type()); //printing the type of dailog which triggered
        await dialog.accept('siva');
    });
    await page.getByText('Click for JS Prompt').click();

    await page.waitForTimeout(10000);


});

/**
 * | Method             | Listens for                  | Auto-remove after event?          |
| ------------------ | ---------------------------- | --------------------------------- |
| `page.on(event)`   | All occurrences of the event | No (manual removal needed)        |
| `page.once(event)` | Only the **next** occurrence | Yes (removes after first trigger) |
//* in the case of .once() the next immedaite alert will be handled and ignores all other alerts on the page

So for Cucumber:

Use .once() inside a step if you expect exactly one dialog per step.

Use .on() in a global hook if you want to handle dialogs throughout the scenario or feature.
 */


//below code is for handle alert when we try close the page due to unsaved data
page.on('dialog', async dialog => { 
  assert(dialog.type() === 'beforeunload');
  await dialog.dismiss();
});

await page.close({ runBeforeUnload: true });
