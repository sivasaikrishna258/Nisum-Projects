//1. object literals { }

let employee = {
    name: "siva",
    age: "20"
}

console.log(`hello ${employee.name}`)

//2. constructor function

function emp(name, age, sex) {
    this.name = name;
    this.age = age
    this.sex = sex;
    this.info = function () {
        console.log(this.sex)
    }

}

let c = new emp("siva", 20, "male")
console.log(c.age)
c.info();

//using class
class emp1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name)
    }
}

let e = new emp1("siva", 20)
e.display()

//3. using factory functions 
/** 
 * A factory function in JavaScript is simply a function that returns a new object. It’s an alternative to using constructor functions or classes.

✅ Basic Definition:
A factory function is any function that creates and returns an object — without using new.
 */

function school(name, count) {
    return {
        name: name,
        count: count,
        info: function () {
            console.log(this.name)
        }
    }
}

let s1 = school("k", 20)
let s2 = school("g", 40)
console.log(s1.name)
console.log(s2.name)
s1.info()














//about the prototype
/**
 * 🔧 1. Using Prototypes (Traditional Way)
js
Copy
Edit
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const p1 = new Person("Siva");
p1.sayHello(); // Output: Hi, I'm Siva
✅ sayHello() is stored on Person.prototype, not on each object — memory efficient.

🆕 2. Using ES6 class (Cleaner Syntax)
js
Copy
Edit
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p2 = new Person("Krishna");
p2.sayHello(); // Output: Hi, I'm Krishna
✅ Behind the scenes, this is doing the same thing: attaching sayHello to Person.prototype.

🧠 Key Point:
Both methods use prototypes under the hood — the class syntax just makes it cleaner and easier to read.


 */

//* ✅ Summary of JS Object and JSON Object
/**
| Operation               | Input (Before)               | Code                   | Result (After)               |
| ----------------------- | ---------------------------- | ---------------------- | ---------------------------- |
| JS Object → JSON string | `{ name: "Siva", age: 25 }`  | `JSON.stringify(user)` | `'{"name":"Siva","age":25}'` |
| JSON string → JS Object | `'{"name":"Siva","age":25}'` | `JSON.parse(jsonStr)`  | `{ name: "Siva", age: 25 }`  |

 */