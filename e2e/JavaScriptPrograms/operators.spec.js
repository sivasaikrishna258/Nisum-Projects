//** JS optional chaining
/**
 * simplifies the process of accessing properties nested within objects, especially when dealing with potentially null or undefined values
 */


const user = {
    dog: {
        name: "Alex"
    }
};

console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
// console.log(user.cat.name);

//* Nullish Coalescing (??) Operator

//* The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is either null or undefined. Otherwise, it returns the left-hand operand.




let username = null;
let defaultName = "Guest";
console.log(username ?? defaultName);

username = "Kartik";
defaultName = "Guest";
console.log(username ?? defaultName);

//* Output
// Guest
// Kartik


//* The symbol || in JavaScript is the logical OR operator. Here's a breakdown of what it does and where it's used:


//* JavaScript Chaining Operator (?.)
/** 
 * The optional chaining operator allows safe access to deeply nested properties without throwing errors if the property doesn’t exist.




const obj = { name: "Aman", address: { city: "Delhi" } };
console.log(obj.address?.city);
console.log(obj.contact?.phone);

Output :

Delhi
undefined

?. safely accesses a property or method.
Returns undefined if the property doesn’t exist

*/