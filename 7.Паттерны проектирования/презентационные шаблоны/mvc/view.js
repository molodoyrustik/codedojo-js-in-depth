class View {
  constructor(model, controller) {
    this.model = model;
    this.controller = controller;

    this.initialize();
  }

  initialize() {
    this.firstNameInput = document.getElementById('firstname');
    this.lastNameInput = document.getElementById('lastname');
    this.messageElement = document.getElementById('message');
    this.saveButton = document.getElementById('save');
    this.resetButton = document.getElementById('reset');

    this.firstname = this.model.firstname;
    this.lastname = this.model.lastname;

    this.saveButton.addEventListener('click', this.handleSaveButtonClick.bind(this));
    this.resetButton.addEventListener('click', this.handleResetButtonClick.bind(this));
  }

  set message(value) {
    this.messageElement.textContent = value;
  }

  handleSaveButtonClick(event) {
    let data = {
      firstname: this.firstNameInput.value,
      lastname: this.lastNameInput.value,
    };

    this.save(data);
  }

  handleResetButtonClick(event) {
    this.reset();
  }

  save(data) {
    this.controller.save(data);
  }

  reset() {
    this.firstNameInput.value = '';
    this.lastNameInput.value = '';
    this.message = '';
  }
}