class Controller {
  initialize(model, view) {
    this.model = model;
    this.view = view;
  }

  save({ firstname, lastname }) {
    if (firstname && lastname) {
      this.model.firstname = firstname;
      this.model.lastname = lastname;
      this.view.message = 'Пользователь создан!';
    } else {
      this.view.message = 'Введите имя и фамилию';
    }
  }
}