class Presenter {
  initialize(model, view) {
    this.model = model;
    this.view = view;

    this.view.tasks = this.model.get();
    this.view.renderInitialData();
  }

  add(data) {
    if (data.title) {
      this.model.add(data);
    } else {
      // валидация допустим view.errorMessage = 'not found ID';
      alert('Необходимо ввести название задачи.!!');
    }
  }

  update(id, data) {
    if (id) {
      this.model.update(id, data);
    } else {
      // валидация допустим view.errorMessage = 'not found ID';
      throw Error('нет ID');
    }
  }

  remove(id) {
    if (id) {
      this.model.remove(id);
    } else {
      // валидация допустим view.errorMessage = 'not found ID';
      throw Error('нет ID');
    }
  }
}