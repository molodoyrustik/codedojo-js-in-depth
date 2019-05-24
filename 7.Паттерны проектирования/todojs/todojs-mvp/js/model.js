class Model {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  getTask(id) {
    return this.tasks.find(item => item.id == id);
  }

  add(data) {
    this.tasks.push(data);
    save(this.tasks);
  }

  get() {
    return this.tasks;
  }

  update(id, data) {
    const task = this.getTask(id);
    Object.keys(data).forEach(prop => task[prop] = data[prop]);
    save(this.tasks);
    return task;
  }

  remove(id) {
    const index = this.tasks.findIndex( item => item.id == id);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    save(this.tasks);
  }
}