class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

function withDisplayName(SuperClass) {
  return class extends SuperClass {
    displayName() {
      return `${this.name} ${this.surname}`;
    }
  }
}

class ExtendedPerson extends withDisplayName(Person) {
  constructor(name, surname) {
    super(name, surname);
  }
}

let person = new ExtendedPerson('Ruslan', 'Bagautdinov');
console.log(person.displayName());