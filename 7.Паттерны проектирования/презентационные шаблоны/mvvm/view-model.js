class ViewModel {
  constructor(model) {
    this.model = model;
  }

  get firstname() {
    return this.model.firstname;
  }

  get lastname() {
    return this.model.lastname;
  }

  // set firstname(value) {
  //   this.model.firstname = value;
  // }

  // set lastname(value) {
  //   this.model.lastname = value;
  // }

  save({ firstname, lastname }, done) {
    if (firstname && lastname) {
      this.model.firstname = firstname;
      this.model.lastname = lastname;
      done('Пользователь создан!');
    } else {
      done('Введите имя и фамилию');
    }
  }
}