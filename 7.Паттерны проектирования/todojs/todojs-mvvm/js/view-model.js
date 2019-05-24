class ViewModel {
  constructor(model) {
    this.model = model;
  }

  get tasks () {
    return this.model.tasks;
  }

  add(data, done) {
    if (data.title) {
      this.model.add(data);
    } else {
      // валидация допустим done('not found ID');
      alert('Необходимо ввести название задачи.!!');
    }
  }

  update(id, data) {
    if (id) {
      this.model.update(id, data);
    } else {
      // валидация допустим done('not found ID')';
      throw Error('нет ID');
    }
  }

  remove(id) {
    if (id) {
      this.model.remove(id);
    } else {
      // валидация допустим done('not found ID');
      throw Error('нет ID');
    }
  }
}