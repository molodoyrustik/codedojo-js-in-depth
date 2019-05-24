class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  toString() {
    return `${this.firstname} ${this.lastname}`;
  }
}

let handler = {
  get(target, propertyName) {
    console.log('Доступ к свойству ' + propertyName);
    return target[propertyName];
  },

  set(target, propertyName, value) {
    console.log('Изменение свойства ' + propertyName + ' со значением ' + value);
    target[propertyName] = value;
  }
}

let person = new Person('Brendan', 'Fich');
let proxiedPerson = new Proxy(person, handler);

console.log(proxiedPerson.toString());