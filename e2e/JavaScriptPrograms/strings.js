

let str ="sivasai";
console.log(str.length)

console.log(str.charCodeAt(1))//Returns the Unicode value of the character at the specified location.

console.log(str.charAt(4))

console.log(str.slice(0,3))//Returns a section of a string.like substring and we can also do this with -ve numbers like -1 and will exclude the "end"
console.log(str.slice(2,-3))

console.log(str.at(0))//same like charAt()

console.log(str.includes('s'))

/**
 * padEnd()	Pad a string with another string until it reaches the given length from rightend.
    padStart()	Pad a string with another string until it reaches the given length from leftend.
 */
// Function to implement  padEnd method
function padStrings() {
    // Input methods
    exString = "Hello";
    exString2 = "Geeks";
​
    // Implement padEnd methods to add symbols at end
    output = exString.padStart(12, "$");
    output2 = exString2.padEnd(12, "$");
​
    // Display output
    console.log(output);
​
    console.log(output2);
}
// Function call
padStrings()

Output
$$$$$$$Hello
Geeks$$$$$$$

//* 🧾 String Cleanup: Java vs JavaScript

/**
| **Use Case**                                           | **Java**                                                  | **JavaScript**                                                         |
| -----------------------------------------------------  | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| ✅ Remove **all special characters**                   | `str.replaceAll("[^a-zA-Z0-9]", "")`                      | `str.replace(/[^a-zA-Z0-9]/g, "")`                                     |
| ✅ Remove **special characters but keep spaces**       | `str.replaceAll("[^a-zA-Z0-9 ]", "")`                     | `str.replace(/[^a-zA-Z0-9 ]/g, "")`                                    |
| ✅ Remove **commas only**                              | `str.replace(",", "")`or`str.replaceAll(",", "")`         | `str.replace(/,/g, "")`<br>or<br>`str.replaceAll(",", "")` *(ES2021+)* |
| ✅ Remove **letters only** (keep nothing else)         | `str.replaceAll("[^a-zA-Z]", "")`                         | `str.replace(/[^a-zA-Z]/g, "")`                                        |
| ✅ Remove only specific characters (e.g., `@` and `#`) | `str.replaceAll("[@#]", "")`                              | `str.replace(/[@#]/g, "")`                                             |
| 🔧 Method Used                                         | `.replaceAll()` (regex or string)                         | `.replace()` with regex or `.replaceAll()` (string, ES2021+)           |
| 📌 Needs Regex?                                        | Yes (for special char ranges)                             | Yes (for global replacement)                                           |
| 📦 Import Required?                                    | No (native `String` methods)                              | No (native methods)                                                    |

 */

//* String interpolation  ---> Automatic replacing of expressions with real values is called string interpolation.
let value="true";
`the ${value} is true`