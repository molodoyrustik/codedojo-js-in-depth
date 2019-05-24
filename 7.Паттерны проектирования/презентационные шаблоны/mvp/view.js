class View {
  constructor(presenter) {
    this.presenter = presenter;

    this.initialize();
  }

  initialize() {
    this.firstNameInput = document.getElementById('firstname');
    this.lastNameInput = document.getElementById('lastname');
    this.messageElement = document.getElementById('message');
    this.saveButton = document.getElementById('save');
    this.resetButton = document.getElementById('reset');

    this.saveButton.addEventListener('click', this.handleSaveButtonClick.bind(this));
    this.resetButton.addEventListener('click', this.handleResetButtonClick.bind(this));
  }

  set message(value) {
    this.messageElement.textContent = value;
  }

  set firstname(value) {
    this.firstNameInput.value = value;
  }

  set lastname(value) {
    this.lastNameInput.value = value;
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
    this.presenter.save(data);
  }

  reset() {
    this.firstNameInput.value = '';
    this.lastNameInput.value = '';
    this.message = '';
  }
}