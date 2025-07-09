/**
 //* What is this in JavaScript and how does it work in different contexts?
Answer:

In global scope, this refers to the global object (window in browsers, global in Node.js).

Inside a function, this refers to the object that called the function (in non-strict mode).

Inside arrow functions, this is lexically bound to the scope where the arrow function is defined (i.e., it does not have its own this).
 */



//* the "this" keyword refers to the World object for the current scenario.
/**
 * In Cucumber, the World object is a shared context for your step definitions in a scenario. 
 * It allows you to store and access values, browser/page instances, test data, or any resources you need across multiple steps in a single scenario.
 */



/**
 * setTimeout(): Executes a function once after a specified delay.
 * setTimeout(function() {
    console.log("This runs once after 2 seconds");
}, 2000);
// setInterval(): Executes a function repeatedly at specified intervals.
setInterval(function() {
    console.log("This runs every 2 seconds");
 */


/**
 * 9. What is the difference between null and undefined in JavaScript?

null: A deliberate assignment of "no value". It is an object.

undefined: A variable that has been declared but not assigned a value is undefined.
 */

/**
 * ✅ What is NaN in JavaScript?
NaN stands for "Not a Number", and it's a special value in JavaScript used to represent invalid or undefined numeric results.

It is of type number, but not equal to any number — even itself.

📌 When does NaN occur?
You get NaN when you do a mathematically invalid operation.
 */
/**
| Concept       | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `this`        | Refers to the World object in a Cucumber scenario                        |
| Use it for    | Sharing data like `browser`, `context`, `page`, or test results across steps |
| Use only with | Regular functions (`function () {}`), **not arrow functions**                |
| Lifecycle     | New `World` instance is created for **each scenario**                        |

 */