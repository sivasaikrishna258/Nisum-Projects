/**
 *JavaScript Array is used to store multiple elements in a single variable. It can hold various data types, including numbers, strings, objects, and even other arrays. 
 It is often used when we want to store a list of elements and access them by a single variable.

 * .we can declare array in 3 diff ways
 * 1. let a=[]                  //empty array
 * 2. let a1=[1,2,3,4]        //for storing numbers
 * 3. let a3=["telugu","english","hindi"]
 * 

 //* Array.isArray() - Returns true if the object is an array, otherwise false.

 //* @ Arrays.from() - Creates a new array from an array-like or iterable object.


 //* a.find() - Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
 
 */
//* flat() method
//Original array
let arr = [[11, 89], [23, 7], 98];

// Performing flat method
let geeks = arr.flat();

console.log(geeks);

let lan = ["telugu", "english"]
    
console.log(lan)
//array methods
/** 1.push - Appends new elements to the end of an array, and returns the new length of the array.
 *  we can push more than one element into array
 */
lan.push("hindi")
console.log("language array after adding one language :")
console.log(lan)

lan.push("malayalam", "bengali")
console.log("language array after adding 2 languages :")
console.log(lan)

/**
 *  2. join() - Adds all the elements of an array into a string, separated by the specified separator string.
 * we can use -, :, \n as an seprator based on out choice
 * 🔄 Common use case:
    Turning an array into a readable sentence or preparing it for output (like in CSV or UI text).
 */
const joinEx = lan.join('\n');
console.log(joinEx)

/**
 * 3. pop - Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 */
lan.pop()
console.log("after removing the last element")
console.log(lan)

/**
 * 4. shift- Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 */
console.log(lan.shift());

/**
 * 5. unshift - Inserts new elements at the start of an array, and returns the new length of the array.
 * it is aopposite of the push
 */

lan.unshift("newLanguage")
console.log("after adding one into begining\n")
console.log(lan)

lan.unshift("newLanguage", "secondLanguage")
console.log("after adding 2 into begining")
console.log(lan)

/**
 * 6. splice - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted.
 */
let mobiles = ['samsung', 'realme', 'apple', 'oneplus', "note"]
console.log(mobiles)
mobiles.splice(2, 2)
console.log("after removing the 2 elemnts from 3rd position")
console.log(mobiles)

//replace deleted elements with new mobiles
mobiles.splice(0, 1, 'moto')
console.log("after adding the  elemnt in deleted items")
console.log(mobiles)

/**
 * 7. slice - Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
        For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end' means it excludes the last element at the end index.
 If end is undefined, then the slice extends to the end of the array.
 */

let offices = ['nisum', 'techm', 'cgi', 'deloitte']
let office = offices.slice(1, 2)

console.log(office)

/**
 * 8. concat - Combines two or more arrays. This method returns a new array without modifying any existing arrays.
 */

/**
 * 9. indexOf() - Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
 
 */
let cities = ['hyd', 'nel', 'rap']
let occurance = cities.indexOf('hyd')
console.log(occurance);


/**
 * 9. includes - Determines whether an array includes a certain element, returning true or false as appropriate.

@param searchElement — The element to search for.

@param fromIndex — The position in this array at which to begin searching for searchElement.
 */

/**
 * 10. forEach - 
 */

let n = [1, 2, 3, 4, 5, 6, 7]
n.sort
console.log("iterating over the array");
n.forEach((e) => {
    console.log(e)
})

/**
 * 11. every - Determines whether all the members of an array satisfy the specified test. for example whenther the every element in array is less than 10 or not 
 * in this type of use case we can use and returns boolean
 */

/**
 * 12. reverse - reverse the order of elements
 */

/**
 * 13. sort - Sorts an array in place. This method mutates the array and returns a reference to the same array.
 * by defalut sort in alphabetical order
 */


/**
 * 14. map - Calls a defined callback function on each element of an array, and returns an array that contains the results.
             Used to transform each element in an array and return a new array of the same length.
 */

let mapEx = ['rohit', 'dhoni', 'raina']
//if don't use { } inside map call back function you don't need to return explicitly . by default it will return
let a = mapEx.map((e) =>
    e + 1
)
console.log(a)

//here we are returning explicitly after completion of the work
let a1 = mapEx.map((e) => {
    return e + 1

});

console.log(a1)

/**
 * 15. filter - Returns the elements of an array that meet the condition specified in a callback function.
                Used to select certain elements based on a condition and return a new array of filtered values.

 */

let f = [1, 1, 2, 3, 3, 4, 5, 5]
let f1 = f.filter((e) => {
    return e < 5;
})
console.log(f1)


let employees =
    [{ name: 'siva', position: 'enginner', location: 'hyderabad' },
    { name: 'sai', position: 'doctor', location: 'singapore' },
    { name: 'krishna', position: 'enginner', location: 'hyderabad' }
    ]

//using filter
let employeesInHyd = employees.filter((emp) => {

     return emp.position === 'doctor';
})
console.log(employeesInHyd)

//using map
let newEmp=employees.map((emp)=>{
    if(emp.position === 'doctor'){
        return "name :"+emp.name
    }
})
console.log(newEmp)


/**
 * reduce - The .reduce() method in JavaScript is used to combine all elements in an array into a single value — like a total, average, object, or string.

 */

let sal=[1,2,3,4,5]
let nimber=sal.reduce((previous,current)=> {
    /**
     * 1st - previous=1,current=2
     * 2nd - previous=3, current=3
     * 3rd - previous=6, current=4
     * 4th - previous=10, current=5
     */
    console.log(previous)
    return previous+current;//here we are returning the sum that will be stored in previous varibale
},0)//here we initialize the previous with 0 as initial value
console.log(nimber)






/**
| Use Case           | Common Methods                                              | Example                                  | Output        |
| ------------------ | ----------------------------------------------------------- | ---------------------------------------- | ----------------- |
| Iteration          | `forEach`, `map`, `filter`                                  | `[1, 2].map(x => x * 2)`                 | `[2, 4]`          |
|                    |                                                             | `[1, 2, 3].forEach(x => console.log(x))` | Logs: 1, 2, 3     |
|                    |                                                             | `[1, 2, 3].filter(x => x > 1)`           | `[2, 3]`          |
| Search/Find        | `find`, `findIndex`, `includes`, `indexOf`, `some`, `every` | `[4, 5, 6].includes(5)`                  | `true`            |
|                    |                                                             | `[4, 5, 6].find(x => x > 4)`             | `5`               |
|                    |                                                             | `[1, 2, 3].every(x => x > 0)`            | `true`            |
| Transform          | `map`, `flatMap`, `reverse`, `sort`, `toReversed`           | `[1, 2].flatMap(x => [x, x * 2])`        | `[1, 2, 2, 4]`    |
|                    |                                                             | `[1, 2, 3].reverse()`                    | `[3, 2, 1]`       |
|                    |                                                             | `[3, 1, 2].sort()`                       | `[1, 2, 3]`       |
| Reduce             | `reduce`, `reduceRight`                                     | `[1, 2, 3].reduce((a, b) => a + b)`      | `6`               |
| Add/Remove         | `push`, `pop`, `shift`, `unshift`, `splice`, `fill`, `with` | `let arr = [1]; arr.push(2)`             | `[1, 2]`          |
|                    |                                                             | `[1, 2].splice(1, 1, 3)`                 | `[1, 3]`          |
| Copy/Slice         | `slice`, `concat`, `toSpliced`                              | `[1, 2, 3].slice(1)`                     | `[2, 3]`          |
|                    |                                                             | `[1, 2].concat([3, 4])`                  | `[1, 2, 3, 4]`    |
| Flattening         | `flat`, `flatMap`                                           | `[1, [2, [3]]].flat(2)`                  | `[1, 2, 3]`       |
| Creation           | `Array.of`, `Array.from`, `fill`                            | `Array.from('abc')`                      | `['a', 'b', 'c']` |
|                    |                                                             | `[1, 2, 3].fill(0)`                      | `[0, 0, 0]`       |
| String Convert     | `join`, `toString`                                          | `[1, 2].join('-')`                       | `'1-2'`           |
|                    |                                                             | `[1, 2].toString()`                      | `'1,2'`           |
| Check              | `Array.isArray`, `length`, `at`                             | `Array.isArray([1, 2])`                  | `true`            |
|                    |                                                             | `[10, 20, 30].at(-1)`                    | `30`              |

*/