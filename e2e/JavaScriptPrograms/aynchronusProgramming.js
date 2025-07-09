//synchronus

function a() {
    console.log("hi")
}

function b() {
    console.log("hello")
}
// a()
// b()
//asynchronus

function c(callback) {
    console.log("hi")
    callback();
}

function d() {
    console.log("hello")
}

c(d)


/**
 * JavaScript async refers to programming techniques that let code run without blocking the execution of other code — especially useful when 
   dealing with I/O tasks like API calls, file reads, or timers.
 * By default js is synchronuous i.e., single threaded execution.
Here are the main ways to do asynchronous programming in JavaScript:

// * 1. Callbacks (old style) :
A function is passed as an argument and called when the async task is done.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((result) => {
  console.log(result); // "Data loaded"
});
*/
/*****************************************************************************************/
/**
//* 2. Promises :
A cleaner, more flexible alternative to callbacks.

states are resolve,fullfilment, rejected
if it's resolve it gives value along with the promise
if it's rejected will give the reason

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

fetchData().then(result => {
  console.log(result); // "Data loaded"
});

/************************************************************************************/
/**
// *3. Async/Await (modern syntax)
Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. 
Built on Promises but allows writing async code that looks synchronous.

async function loadData() {
  const result = await fetchData(); // waits for the Promise to resolve
  console.log(result); // "Data loaded"
}

loadData();
await can only be used inside an async function.
/************************************************************************************* */

/**
// * Promise - 
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation, 
and its resulting value.
// * methods of js promise

// * 1.Promise.all() :
                    The Promise.all() Method in JavaScript takes an array of promises and waits for all promises to "resolve", then it returns one promise. If any promise is rejected, it will reject it immediately
// * 2.Promise.allSettled() :
                    Promise.allSettled() Methods in JavaScript wait for all promises to "settle", and it returns an array of their outcomes fulfilled or rejected.
// * 3.Promise.race() :
                    In this method, Returns a Promise that "settles" as soon as one of the promises settles (resolve or reject).
// * 4.Promise.any() :
                    Returns a Promise that "resolves" as soon as any promise resolves.
                    If all promises reject, it rejects with an AggregateError.

    // * Example For all prmoses:
    const promise1 = new Promise((resolve) => {  
            setTimeout(() => resolve('Promise 1 resolved'), 2000);  
    });  
    const promise2 = new Promise((resolve) => {  
             setTimeout(() => resolve('Promise 2 resolved'), 1000);  
    });  
    let promises=[promise1, promise2];

        Promise.race(primises)       //we can modify methods accordingly 
        .then((value) => { 
            try {
                console.log(value); // Expected output: "Promise 2 resolved"  
            }
        })
        .catch((error) => {  
                console.error(error);  
        });  

// * Handling Promises:
You can handle the result of a Promise using .then(), .catch(), and finally().

.then() is used to handle the resolved value when the Promise is successful.

.catch() is used to handle the rejected value when there is an error.

.finally() is used to run a block of code after the Promise settles, regardless of whether it was resolved or rejected.
 */

/**
// * Callback hell (also known as the "Pyramid of Doom") is a situation in JavaScript where multiple nested callbacks are used to handle asynchronous operations — 
 * leading to deeply indented, hard-to-read, and difficult-to-maintain code.
 * 
 * example : doSomething(function(result1) {
  doSomethingElse(result1, function(result2) {
    doAnotherThing(result2, function(result3) {
      doFinalThing(result3, function(result4) {
        console.log('Final result:', result4);
      });
    });
  });
});

so instead of this we can use promise to handle this type of situation using then()
doSomething()
  .then(result1 => doSomethingElse(result1))
  .then(result2 => doAnotherThing(result2))
  .then(result3 => doFinalThing(result3))
  .then(result4 => console.log('Final result:', result4))
  .catch(error => console.error('Error:', error));

 */

/**
 * why we even need to tell JavaScript a function is async in the first place. The core reason is:

✅ JavaScript needs to know whether a function returns a Promise or a regular value, so it can treat it accordingly.
if it is promise we have to handle to resolve it or else no need
It allows you to use await inside the function (and only inside).

Here's why we need await for these operations:

1. page.goto():
When you call page.goto('https://example.com'), 
it doesn't immediately load the page. Instead, it sends a request to the browser to load the page, 
and that takes some time (depending on the network, server response, etc.). 
page.goto() returns a Promise that resolves only once the page has fully loaded (or a timeout occurs).

Why await here?
Without await, the next line of code (like page.click()) would execute before the page has finished loading, 
causing errors or inconsistent behavior because you might be trying to click a button on a page that hasn't finished loading.
 */

/**
//  * how to create a promise 
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

// * so we are doing return the promise mannually but if make the function as "async" it will return the promise automatically like below:

async function run(){
console.log("hi")
}

async () =>{
    await run();
}();
 */

// async function add(a, b) {
//     return a + b;
// }
// console.log(await add(2, 3))//one way using await keyword

// add(2, 3).then((result) => {
//     console.log(result)
// })


/**function navigateToSite(page) {
  return page.goto('https://example.com');
}

test('do something', async ({ page }) => {
  navigateToSite(page).then(() => {
    page.getByText('Login').click(); // ❌ still async; no await means possible timing issues
  });
});
*/
// aynchronusProgramming.ts
export class One {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        return this.page.goto("https://artoftesting.com/samplesiteforselenium");
    }
    async text() {
        return this.page.locator('#dblClkBtn').innerText()
    }
}
