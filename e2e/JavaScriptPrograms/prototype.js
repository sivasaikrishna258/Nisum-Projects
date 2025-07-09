/**In JavaScript, a prototype is an object that other objects inherit properties and methods from. 
 * It's a foundational concept in JavaScript’s inheritance model.
 * 
 */

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} and ${this.age} makes a noise.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a noise.

Animal.prototype.age=10;
const cat = new Animal("Buddy");
cat.age=30;
cat.speak();
console.log(cat);
