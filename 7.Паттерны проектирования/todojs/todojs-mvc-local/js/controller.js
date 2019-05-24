class Controller {
  initialize(model, view) {
      this.model = model;
      this.view = view;
  }

  add(data) {
    if (data.title && data.id) {
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