
//* number to string
/**
 * 🔁 Converting Numbers to Strings
 * 
String(123);           // "123"
(123).toString();      // "123"
123 + "";              // "123" (coercion using + with string)
 */

let n=20;
console.log((n).toString())
console.log(String(n))

console.log(typeof((n).toString()))

//* string to number
/**🔁 Converting Strings to Numbers

Number("123");         // 123
parseInt("123.45");    // 123
parseFloat("123.45");  // 123.45
+"123";                // 123 (unary + operator)
Number("abc");         // NaN (invalid number) 
*/

let str="sivasai"
let str1="123.3"

console.log(Number(str)) //it given NaN
console.log(Number(str1))
console.log(typeof(Number(str1)))
console.log(parseInt(str1))
console.log(parseFloat(str1))

/** //*🔁 Converting Booleans to Numbers

Number(true);          // 1
Number(false);         // 0
+true;                 // 1
+false;                // 0

//* 🔁 Converting Numbers to Booleans

Boolean(1);            // true
Boolean(0);            // false
!!1;                   // true
!!0;                   // false */

//character to string

