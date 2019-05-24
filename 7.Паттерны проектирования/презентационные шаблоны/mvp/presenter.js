class Presenter {
  initialize(model, view) {
    this.model = model;
    this.view = view;

    this.view.firstname = this.model.firstname;
    this.view.lastname = this.model.lastname;
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