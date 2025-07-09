/**
 * it stores the values in key value pairs
 * Why we should use map when we already have object?
 * this is because object will used when Keys are strings or symbols but map is used for any key types and also  Unlike objects, keys in a Map maintain insertion order. 
 * 
 * map will allow duplicate values and but not allowed duplicate keys                                                                        

A Map is a data structure that stores key-value pairs, where each key is unique. It is similar to an object but has some advantages:

Inserts keys in the order they were added.
Allows keys of any type, not just strings and symbols.
Provides better performance when dealing with large datasets.
 */

/**them right away 👇

//* 🔹 Common Map Methods
Method	               Description	                                Example
.set(key, value)	 Adds or updates a key-value pair	      map.set('name', 'Siva')
.get(key)	       Retrieves the value for a given key	   map.get('name') ⇒ 'Siva'
.has(key)	       Checks if a key exists	                  map.has('name') ⇒ true
.delete(key)	    Removes a key-value pair	               map.delete('name')
.clear()	          Removes all entries	                     map.clear()
.size	             Returns number of entries	               map.size ⇒ 3

**************************************************************************************************

//* 🔁 Iteration Methods

| Method                  | Description                              | Example usage                               |
| ----------------------- | ---------------------------------------- | ------------------------------------------- |
| `keys()`                | Returns iterator for keys                | `for (let key of map.keys()) {}`            |
| `values()`              | Returns iterator for values              | `for (let value of map.values()) {}`        |
| `entries()`             | Returns iterator of `[key, value]` pairs | `for (let [k, v] of map.entries()) {}`      |
| `forEach((value, key))` | Executes callback for each entry         | `map.forEach((v, k) => console.log(k, v));` |

 */

const m = new Map();
m.set("name", "siva") //for adding to the set
m.set("age", 20)
console.log(m.get("name"))  //for getting the value based on key

console.log(m.delete("age")) //for deleting entry based on the key

m.set("age", 20)

for (let value of m.values()) { // for iterating over the values
   console.log(value)
}
for (let value of m.keys()) { // for iterating over the keys
   console.log(value)
}


for (let [key, value] of m.entries()) { // for iterating over the keys and values
   console.log(key, value)
}

m.forEach((value, key) => {
   console.log(key, value)
})

const company = new Map();
company.set("name", "GFG");
company.set("no_of_employee", 200);
company.set("category", "education");

function print(key, values) {
   console.log(values + "=>" + key);
}
company.forEach(print);