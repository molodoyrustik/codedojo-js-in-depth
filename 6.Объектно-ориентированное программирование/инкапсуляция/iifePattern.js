const TodoList = (function() {
  let store = new WeakMap();

  return class {
    constructor() {
      store.set(this, { todos: [] });

      this.init();
    }

    init() {
      Object.defineProperty(this, 'todos', {
        get: function() {
          return Object.freeze(store.get(this).todos);
        },
        enumerable: true,
        configurable: false
      });
    }

    add(todo) {
      store.get(this).todos.push(todo);
    }

    edit(id, data) {
      for (let i = 0; i < store.get(this).todos.length; i++) {
        let todo = store.get(this).todos[i];
  
        if (todo.id === id) {
          todo.title = data.title;
          todo.completed = data.completed;
          break;
        }
      }
    }

    remove(id) {
      for (let i = 0; i < store.get(this).todos.length; i++) {
        let todo = store.get(this).todos[i];
  
        if (todo.id === id) {
          todos.splice(index, 1);
          break;
        }
      }
    }

  }
})()



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

let todoList = new TodoList();
let todoList2 = new TodoList();
todoList.add(todo);

console.log(todoList.todos);
console.log(todoList2.todos);