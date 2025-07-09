// import test from "node:test";
import  test  from '@playwright/test';

test("scrolling demo", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // Scroll to the bottom of the page
  // await page.evaluate(() => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // });
  
 // Scroll to the top of the page
  await page.evaluate(() => {
    window.scrollTo(0, -document.body.scrollHeight);
  });
  // Wait for a specific element to be visible after scrolling
  await page.waitForSelector('#footer', { state: 'visible' });

  // Scroll to a specific element
  const element = await page.$('#mousehover');
  if (element) {
    await element.scrollIntoViewIfNeeded();
    
  }
});

/**
 * 
 //* ✅ Summary of document and window in evaluate
Use document when you're working with HTML elements, the DOM, or metadata of the page.

Use window when you want to interact with global browser properties, dimensions, localStorage, or global JavaScript variables/functions.


 //* 🔍 What is page.evaluate() in Playwright?
✅ Definition:
page.evaluate() is a method in Playwright that allows you to run JavaScript code inside the browser context — as if you were typing into the browser’s DevTools console.

🧠 Why it's important:
In Playwright tests, your test code runs in Node.js, not directly in the browser.
So, if you want to interact with the DOM, access browser APIs, or read something from the page’s JavaScript state — you use page.evaluate().


//* difference between Playwright scripts and page scripts
|                   | **Playwright Script**                          | **Page Script** (inside `page.evaluate()`)               |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------- |
| **Runs in**       | Node.js (your test environment)                | Browser (web page context)                               |
| **Has access to** | Playwright API (`page.click()`, `page.goto()`) | DOM (`document.querySelector`, `window`, `localStorage`) |
| **Purpose**       | Automate actions like clicks, navigation, wait | Access or manipulate browser-side content directly       |
| **Example**       | `await page.click('#login')`                   | `document.querySelector('#login').click()`               |

*/

//* ✅ Common Methods & Properties You Can Use on a DOM Element
//* Here’s a categorized list of what you can do inside page.evaluate():

//* 📄 Content & Structure
/**
 * | Property/Method        | Description                       |
| ---------------------- | --------------------------------- |
| `textContent`          | All the text inside the element   |
| `innerText`            | Text as rendered (ignores hidden) |
| `innerHTML`            | HTML inside the element           |
| `outerHTML`            | HTML including the element itself |
| `value`                | Value of input, textarea, select  |
| `getAttribute('attr')` | Get a specific attribute          |
| `hasAttribute('attr')` | Checks if attribute exists        |
| `dataset`              | Access `data-*` attributes        |
| `tagName`              | Element tag name (e.g., 'H1')     |
| `id`, `className`      | Get element’s ID/class            |

 */
//* 🎨 Style & Appearance
/**
 * | Property/Method               | Description                        |
| ----------------------------- | ---------------------------------- |
| `getComputedStyle(el).color`  | Get CSS properties                 |
| `el.style`                    | Inline styles (`el.style.display`) |
| `classList.contains('class')` | Check if element has a class       |
| `offsetHeight`, `offsetWidth` | Size of the element                |
| `getBoundingClientRect()`     | Position/size relative to viewport |
| `scrollIntoView()`            | Scroll element into view           |

 */
//* 🧭 Form Element Specific
/**
 * | Property/Method | Description                        |
| --------------- | ---------------------------------- |
| `checked`       | For checkboxes/radios              |
| `selected`      | For option elements                |
| `selectedIndex` | Index of selected option in select |
| `disabled`      | Whether the field is disabled      |
| `required`      | Whether the field is required      |

 */
//* 🧪 Interaction and State
/**
 * | Property/Method       | Description                           |
| --------------------- | ------------------------------------- |
| `focus()`, `blur()`   | Trigger focus/blur events             |
| `click()`, `submit()` | Trigger native click/submit           |
| `dispatchEvent()`     | Trigger custom events                 |
| `isConnected`         | Check if element is in DOM            |
| `contains(otherEl)`   | Check if one element contains another |

 */
//* 🔄 DOM Traversal
/**
 * | Property/Method          | Description                      |
| ------------------------ | -------------------------------- |
| `children`, `childNodes` | Get child elements               |
| `parentElement`          | Get parent element               |
| `previousElementSibling` | Get previous sibling             |
| `nextElementSibling`     | Get next sibling                 |
| `closest('selector')`    | Nearest ancestor that matches    |
| `querySelector()`        | Search inside this element       |
| `querySelectorAll()`     | Get all matching elements inside |

 */
