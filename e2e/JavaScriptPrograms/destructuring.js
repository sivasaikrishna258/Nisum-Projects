/**
 * Destructuring in JavaScript is a convenient way to extract values from arrays or objects and assign them to variables in a single statement.
* Think of spread as spreading out values(...)
 * Used to:
copy arrays/objects
Merge arrays
Pass array elements as arguments (function(...elements)//so it works as dynamic array)
 * Think of rest as collecting the rest of the values(...)
 */

//* array destructring
let a = [1, 2, 3, 4]

const [x, y] = a
console.log(x, y) //output: 1 2

let bikes = ["ktm", "duke", "nike"]

const [bike1, , bike2] = bikes //here we should use , s based on the elements u want to skip like for 1 use, for 2 use ,,

console.log(bike1, bike2)

let array1 = [1, 2, 3, 4, 5, 6, 7, 8]

const [a1, b, ...c1] = array1


console.log(c1) //output: [3, 4, 5, 6, 7, 8]
// * object destructuring

const fruits = {
    fruit1: "banana",
    fruit2: "dani",
    fruit3: "grape"
}

const { fruit1 } = fruits;
console.log(fruit1)

//*For potentially missing properties we can set default values:

const fruits1 = {
    fruit1: "banana",
    fruit2: "dani",
    fruit3: "grape"
}

const { fruit2, loc = "us" } = fruits1;
console.log(fruit2, loc)

// *Object Property Alias

const emp = {
    name: "siva",
    age: "24"
}

const { name: FirstName } = emp
console.log(FirstName)

// *String Destructuring

// Destructuring can be used with any iterables.

let wname = "sivasai"

const [ca] = wname;
console.log(ca)

// * Swapping JavaScript Variables (You can swap the values of two variables using a destructuring assignment:)

let fName = "siva"
let lName = "sai";

[fName, lName] = [lName, fName]

console.log(fName, lName)


//*  spread operator 
let s = 0
function add(...n) {//spread operator

    for (let i of n) {
        s = s + i
    };
    return s
};

console.log(add(2, 3))
console.log(add(3, 4, 5))

//* function destructing

const new1 = {

    lastName: "sivasai",
    sex: "male",
    fname: "krishna"
}

function add3({ lastName, sex }) {
    console.log(lastName, sex)
}
add3(new1)