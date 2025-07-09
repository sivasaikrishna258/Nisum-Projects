/**
 * set doesn't allow duplicate values
 * 🔹 Useful Set Methods
Method	            Description	                            Example
.add(value)	        Adds a new value	                set.add('apple')
.has(value)	        Checks if a value exists	        set.has('apple') ⇒ true
.delete(value)	    Removes a value	                    set.delete('apple')
.clear()	        Removes all values	                set.clear()
.size	            Returns the number of unique values	set.size ⇒ 3
 */

let set=new Set()

//appending elemnets to set
set.add(2)
set.add(3)
set.add(4)
console.log(set)

console.log(set.has(3))

set.forEach((n)=>{
    console.log(n)
})

console.log(set.size)

const a=Array.from(set)
console.log(a) //output will be [2,3,4]

// Converting an array to a set to remove duplicates
const arr = [1, 2, 2, 3, 4, 4, 5];  
const uniqueSet = new Set(arr);
console.log(uniqueSet); // Output: Set { 1, 2, 3, 4, 5 }