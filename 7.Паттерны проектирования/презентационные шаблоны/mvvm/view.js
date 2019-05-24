class View {
  constructor(viewModel) {
    this.viewModel = viewModel;

    this.initialize();
  }

  initialize() {
    this.firstNameInput = document.getElementById('firstname');
    this.lastNameInput = document.getElementById('lastname');
    this.messageElement = document.getElementById('message');
    this.saveButton = document.getElementById('save');
    this.resetButton = document.getElementById('reset');

    this.firstNameInput.value = this.viewModel.firstname;
    this.lastNameInput.value = this.viewModel.lastname;

    this.saveButton.addEventListener('click', this.handleSaveButtonClick.bind(this));
    this.resetButton.addEventListener('click', this.handleResetButtonClick.bind(this));

    // this.firstNameInput.addEventListener('change', (event) => {
    //   this.viewModel.firstname = event.target.value;
    // })

    //  this.lastNameInput.addEventListener('change', (event) => {
    //   this.viewModel.lastname = event.target.value;
    // })
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
    this.viewModel.save(data, message => this.message = message);
  }

  reset() {
    this.firstNameInput.value = '';
    this.lastNameInput.value = '';
    this.message = '';
  }
}