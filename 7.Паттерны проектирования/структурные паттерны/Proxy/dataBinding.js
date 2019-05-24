class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  toString() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Binder {
  bindTo(sourceObject, sourceProperty, targetObject, targetPropterty) {
    let bindHandler = {
      set (target, property, newValue) {
        if (property == sourceProperty) {
          target[sourceProperty] = newValue;
          targetObject[targetPropterty] = newValue;
        }
      }
    }
    return new Proxy(sourceObject, bindHandler);
  }
}

let person = new Person('Brendan', 'Eich');
let input = document.getElementById('firsname');
let binder = new Binder();
let proxiedPerson = binder.bindTo(person, 'firstname', input, 'value');

person.firstname = 'Douglas';