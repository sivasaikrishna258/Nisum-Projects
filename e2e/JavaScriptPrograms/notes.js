/**
 * As per conventions, functions associated with an object are known as methods. 
    This is considered to be a small difference between a function and a method. 
 * A function is an independent sequence of a bunch of statements whereas a method is associated with an object and is generally referenced by this keyword. 
 */

//* What are JavaScript Objects?
/**
JavaScript objects are collections of properties, where each property is defined as a key-value pair. 
They are used to model real-world entities and complex data structures.
*/


//* Object methods
/**
 * ✅ Object.assign() in JavaScript
The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

🧠 Syntax
Object.assign(target, ...sources);

target      : The object to receive the new properties.
...sources  : One or more objects from which to copy properties.

//* Object.assign() is great when you just want to copy properties without inheritance.

 */

//* Key Differences: Function Declaration vs. Function Expression
/**
Function Declaration: The function is defined and can be called anywhere in the code (even before it’s defined, due to something called "hoisting").
Function Expression: The function is defined as part of an expression (usually assigned to a variable), and it can only be called after the line where it’s defined.
*/

/**
 // * Key Differences: Function vs. Method in JavaScript
| **Function**                                                                    | **Method**                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| A JavaScript function is a block of code designed to perform a particular task. | A JavaScript method is an object property that has a function value.           |
| Syntax: `function functionName(params) { // code }`                             | Syntax: `object = { methodName: function() { // code } }; object.methodName()` |
| A function can pass the data that is operated and may return the data.          | The method operates on the data contained in an object.                        |
| A standalone function can be called directly by its name.                       | A method must be called through an object using dot or bracket notation.       |

*/

/**
 * * In JavaScript, function binding refers to the process of associating a function with a specific context (this value). The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value.
 //* ✅ 1. bind()
Returns a new function with a specific this value permanently bound.

Does not execute the function immediately.

const person = { name: 'Alice' };
function greet() {
  console.log(`Hello, ${this.name}`);
}

const boundGreet = greet.bind(person);
boundGreet(); // Hello, Alice

/************************************************************************************* */
/** 
//* ✅ 2. call() --> It can be used to invoke (call) a method with an object as an argument (parameter).

Invokes the function immediately, with a specified this and arguments passed one by one.


function greet(age) {
    console.log(`Hello, my name is ${this.name} and I am ${age}`);
  }
  
  const person = { name: 'Bob' };
  greet.call(person, 30); // Hello, my name is Bob and I am 30


/   ******************************************************************************************** */  

/**
 // * ✅ 3. apply()
Similar to call(), but arguments are passed as an array.

greet.apply(person, [25]); // Hello, my name is Bob and I am 25

 */

//* why should we use bind, call, and apply?
/**
 * These methods are used to control the value of `this` in JavaScript functions, allowing you to:
 * 
 * 1. **bind()**: Create a new function with a specific `this` context, useful for event handlers or callbacks.
 * 2. **call()**: Invoke a function immediately with a specific `this` context and individual arguments.
 * 3. **apply()**: Similar to call(), but allows passing arguments as an array, useful for functions that accept variable numbers of arguments.
 */
/***********************************************************************************************************************/
/**
 //* 🔒 What Is a Closure in JavaScript?
A closure is a function that remembers variables from the scope in which it was created, even after that outer scope has finished executing.

 */
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2


//* typeof --> it is used to find the type of variable

/**
 * The JavaScript Object.create() Method creates a new object, using an existing object as the prototype of the newly created object.
*/
Example:

// Object.create() example a
// simple object with some properties
const coder = {
    isStudying: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I 
              studying?: ${this.isStudying}.`)
    }
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();
