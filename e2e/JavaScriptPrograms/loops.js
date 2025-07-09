/**
 * if we want to iterate through array use for..of
 * but if u want to iterate over object use for..in
 */

/**
 * we have 5 types of loops in javascript
 * 1. for loop  --> most commonly used loop (ex: for(let i=0;i<10;i++))
 * 2. while loop
 * 3. do while loop
 * 4. for..of loop
 * 5. for..in loop
 */

const emp={
    name : "siva",
    age : 20
}

console.log(emp.name)//standard way to print

//using loop
for(let key in emp){
    console.log(emp[key])
}