class TodoList {
  constructor() {
    let todos = [];

    function init() { // приватный метод

    }

    Object.defineProperty(this, 'todos', {
      get: function() {
        return Object.freeze(todos);
      },
      enumerable: true,
      configurable: false
    })

    this.add = function (todo) {
      todos.push(todo);
    }

    this.get = function () {
      return todos;
    }

    this.edit = function(id, data) {
      for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
  
        if (todo.id === id) {
          todo.title = data.title;
          todo.completed = data.completed;
          break;
        }
      }
    }

    this.remove = function(id) { // привелигированный метод
      for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
  
        if (todo.id === id) {
          todos.splice(index, 1);
          break;
        }
      }
    }
  }

  print() { // публичный метод
    let todos = this.todos;
  }
}

class Todo {
  constructor(title, completed = false) {
    let id = Date.now();

    Object.defineProperty(this, 'id', {
      get: function() {
        return id;
      },
      enumerable: true,
      configurable: false
    })

    Object.defineProperty(this, 'title', {
      get: function() {
        return title;
      },
      set: function(value) {
        title = value;
      },
      enumerable: true,
      configurable: false
    })

    Object.defineProperty(this, 'completed', {
      get: function() {
        return completed;
      },
      set: function(value) {
        completed = value;
      },
      enumerable: true,
      configurable: false
    })
  }
}

let todo = new Todo('Изучить ООП');
todo.id = 'asdfa';

let todoList = new TodoList();
todoList.add(todo);

console.log(todo);
console.log(todoList.todos[0].title);