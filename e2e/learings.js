/**
 ** await this.page.getByPlaceholder(`${placeholder}`, { exact: true }); --> 🔍 exact: true ensures partial matches don’t cause false positives.(menas it doesn't locate the elements with partial matching)

 ** await this.page.locator('h2', { hasText: headerName }); --> by using hasText we can get the element with the text for that particular element

 ** const inputText = action.split(':')[1];  --> get the 1st element from array

 ** .toBeAttached() - like should(be.exist) in cypress


//* normalize(text || '') is a common JavaScript pattern used to safely handle cases where text might be null or undefined.

Breakdown:
text || '' means:

If text is a truthy value (like a non-empty string), use text.

Otherwise (if text is null, undefined, or any falsy value), use an empty string ''.

Why do this?
Because calling .replace() or .toLowerCase() on null or undefined would throw an error.
 
 */

/** 
Exactly! You got it — Playwright’s main filtering options when locating elements based on content or child elements are:

1. has
Takes a Locator (an element or sub-element).

Filters parent locator to elements that contain this child locator anywhere inside.

Example:

page.locator('.parent', {
  has: page.locator('a.button')
});
2. hasText
Takes a string or RegExp.

Filters locator to elements that contain that text anywhere inside (including descendants).

Example:

page.locator('button', {
  hasText: 'Submit'
});


| Option    | Input Type        | What it Filters On                  |
| --------- | ----------------- | ----------------------------------- |
| `has`     | Locator (element) | Contains that child element         |
| `hasText` | string or regex   | Contains that text somewhere inside |

*/

/**
 * ✅ How partial class selector works
In CSS (and Playwright follows this), classes are space-separated on elements. So this:

<button class="btn btn-default add-to-cart">Add to cart</button>
has three classes:

btn

btn-default

add-to-cart
 */

//** we use .forEach() in cypress we have similiar kind method in playwright through which we we iterate through the array like we did it in cypress */
Then('the delivery address content is', async function (dataTable) {
    const dataTableHashes = dataTable.hashes();
    const address = this.page.locator("#address_delivery li");

    await Promise.all(
        dataTableHashes.map(async (row, index) => {
            await expect(address.nth(index + 1)).toHaveText(row.Address);
        })
    );
});


//* What is Sharding in Testing?
/**
 * Sharding means splitting your test suite into smaller chunks (shards) and running those shards in parallel — usually on different machines or processes. This helps:

Speed up test execution by distributing the load.

Make CI pipelines more efficient.

Balance test execution times better across shards.

For example, if you have 100 tests and 5 shards, each shard runs about 20 tests in parallel.

*/

//* Locator vs ElementHandle
/**
 * The difference between the Locator and ElementHandle is that the latter points to a particular element, while Locator captures the logic of how to retrieve that element.
 means in element handle it capture at a time where as in locator it will perform locating elelemnt everytime it calls
 
 */
const handle = await page.$('text=Submit'); //element handle
// ...
await handle.hover();//here it will call one time only for these two statements
await handle.click();

const locator = page.getByText('Submit'); //locator
// ...
await locator.hover(); //here it will call locator to find the element
await locator.click(); //again here the call will happen o locate element