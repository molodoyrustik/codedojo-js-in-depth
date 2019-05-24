// functional style + oop style
class TodoList {
  constructor(todos = []) {
    this.todos = this.todos;
  }

  add(data) {
    return new TodoList([...(this.todos), data]);
  }

  get(id) {
    return this.todos.find(todo => todo.id === id);
  }

  update(id, todo) {
    return new TodoList(todoList.map(todo => {
      if (todo.id === id) {
        return Object.assign({}, todo, data);
      }
    }))
  }

  remove(id) {
    return new TodoList(todoList.filter(todo => todo.id !== id));
  }
}

new TodoList().add({}).update().remove();