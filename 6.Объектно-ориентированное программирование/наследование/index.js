// так было раньше - start 
// function Todo(title, completed) {
//   this.title = title;
//   this.completed = completed;
// }
// function Task(title, dueDate, completed) {
//   Todo.call(title, completed);
//   this.dueDate = dueDate;
// }
// function extend(subClass, superClass) {
//   function F() {};
//   F.prototype = superClass.prototype;
//   subClass.prototype = new F();
//   subClass.prototype.constuctor = subClass;
// }
// extend(Task, Todo);
// так было раньше - end 

// множественное наследование - start
// function Person(name, surname) {
//   this.name = name;
//   this.surame = surname;
// }

// function Developer(name, surname, knowLanguage) {
//   Person.apply(this, arguments);
//   this.knowLanguage = knowLanguage;
// }

// function Student(name, surname, subjectOfStudy) {
//   Person.apply(this, arguments);
//   this.subjectOfStudy = subjectOfStudy;
// }

// function DevStudent(name, surname, knowLanguage, subjectOfStudy) {
//   Developer.call(this, name, surname, knowLanguage);
//   Student.call(this, name, surname, subjectOfStudy);
// }
// множественное наследование - end

// множественное наследование mixin - pattern - start
function mixin(target, source, members) {
  if (members) {
    for (let member of members) {
      if (source.hasOwnProperty(member)) {
        target[member] = source[member];
      }
    }
  } else {
    for (let key of source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }
}

let dataMixin = {
  save() {
    localStorage.setItem(this.id, JSON.stringify(this));
  },

  load() {
    localStorage.getItem(this.id);
  }
}

class Todo {
  constructor(name, completed) {
    this.name = name;
    this.completed = completed;
  }
}

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

mixin(Person.prototype, dataMixin)
mixin(Todo.prototype, dataMixin)
//множественное наследование mixin - pattern - end

