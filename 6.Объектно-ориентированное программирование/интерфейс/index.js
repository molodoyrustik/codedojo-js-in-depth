class Todo {
  static implements(object) {
    let type = {
      title: String,
      completed: Boolean
    }

    for (let key in type) {
      if (!object.hasOwnProperty(key) || !object[key] instanceof type[key]) {
        return false;
      }
    }

    return true;
  }
}

let todo = {
  title: 'sddf',
  completed: false
}

console.log(Todo.implements(todo))