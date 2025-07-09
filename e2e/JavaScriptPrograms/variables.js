/**
 * Variables :

var , let , const


var :
for variables we have 2 types of scopes 1. global, 2.functionally/local

eg:   var x=10;//global variable

function display(){

var y=0;//functional scope/local
}

issue with the var keyword is if u redeclare and reinitialization we can't use the old value .the value will be lost
*/

/**********************************************************************************************************************************/
/**let :
the scope of the let keyword is blocked means only with the { } scope

eg : let x=110;

function f(){
let y=20;
console.log(y)//it will work
}

console.log(y)//it will not work as scope is blocked only 
*/
/************************************************************************************************************************************/


/**
 * if we dont declare variable it is undefined
 * 
 * var: we can redeclare and reinitialization is possible
 * 
 * let: we can't redeclare but can reinitialization
 * 
 * const :both redeclare and reinitialization is not possible
 */
/********************************************************************************************************** */
/**
| Keyword | Scope Type     | Block Scoped | Re-declarable | Hoisted | Mutable                           |
| ------- | -------------- | ------------ | ------------- | ------- | --------------------------------- |
| `var`   | Function scope | ❌ No         | ✅ Yes         | ✅ Yes\* | ✅ Yes                             |
| `let`   | Block scope    | ✅ Yes        | ❌ No          | ✅ Yes\* | ✅ Yes                             |
| `const` | Block scope    | ✅ Yes        | ❌ No          | ✅ Yes\* | ✅ No (but objects can be mutated) |

/****************************************************************************************************************************************** */



/**
 * why we go for switch instead of if else
 * because if we use if else it will check each and every condition until the condition is true so it takes more time
 * but in the case of switch it will directly go to case value which matches the switch key and execute that particular block of code
 */


/**
 * It looks like you entered a pair of backticks: ` ` — these are called backticks or template literals in JavaScript.

🔹 What are backticks used for?
Backticks are used to create template strings in JavaScript, allowing for:

Multiline strings

Variable interpolation

Embedded expressions

✅ Example:

const name = "Siva";
const message = `Hello, ${name}!`;
console.log(message); // Hello, Siva!
🔄 ${...} is used inside backticks to insert variables or expressions.

🧾 Multiline string example:

const msg = `This is line 1
This is line 2`;
console.log(msg);
🧠 Summary:
Backticks (`) allow you to embed variables and write multiline strings.

Use ${} inside backticks to insert dynamic values.
 */