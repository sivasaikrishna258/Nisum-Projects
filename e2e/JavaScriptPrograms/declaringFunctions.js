/**
 * A function declaration is a way to define a named function that can be called anywhere in the scope (even before it's defined, thanks to hoisting).
 * Hoisting means that JavaScript looks for variable and function declarations first and sets them up before running the actual code, no matter where you wrote them in the file or function.
   (or) we can use variable or fucntion before it is declared
 */


/**
 * 1. we can declare functions with function keyword with function name 
 *syntax : function functionName(){};
 here we pass the parameters using function name like add(2,3)
 */

 console.log(add(2,3));

 let c=add(3,4)
 console.log(c)
function add(a,b){
    return a+b
}

/**
 * 2. function Expression - here we declare a functions without function name like ananymous function and that will be stored in an variable
 * here we pass parameters usinf the function expression varaible like d(2,3)
 */

let d=function(a,b){
    return a+b
}

let sum=d(2,3)
console.log(sum)

/**
 * Arrow function - similar to function expression but way of declaring is different
 */

let multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(3,4))

let empname="siva"
console.log("hello "+ empname)