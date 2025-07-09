/**
 * 🧠 evaluate() and evaluateAll() in Playwright:
They run JavaScript code directly in the browser's DOM context, not in Node.js or Playwright context.

⚡ What Does That Mean?
Playwright runs your test in Node.js, but evaluate()/evaluateAll() bridge into the browser, where your actual page is rendered — just like writing code in Chrome DevTools Console.
 */

/**
 * ✅ With evaluate():
You do everything manually:

*/
const texts = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('p')).map(p => p.innerText);
});
/**
✅ With evaluateAll():
Playwright selects the elements for you:

*/
const texts1 = await page.evaluateAll('p', elements => {
  return elements.map(el => el.innerText);
});


//* What is javascript ?
 
/*
Frontend JavaScript = DOM + Events + API calls + Logic for interactivity

*/

/**
 * ✅ Final Suggested Line:
Node.js provides a JavaScript runtime environment that allows you to run JS outside the browser — such as in a terminal.
With libraries like Playwright, Node.js can be used to automate and interact with browsers programmatically.

🎯 Think of Node.js like a remote:
You're holding the remote (Node.js) and pressing buttons — and the browser (TV) is doing the actions.

✅ You're right: Automation targets the browser (like clicking buttons, filling forms).
But the scripts themselves are run from the terminal using tools like Playwright, Selenium, or Puppeteer — which are built on Node.js.
 */
