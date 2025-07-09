
// * Get -->  used to access the value of a property
// * Set --> used to set the value of a property
  
  class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName.trim();
    }
  }
  
  const p = new Person("Bob");
  p.name = "  Charlie  ";
  console.log(p.name); // ➡️ "Charlie"
  