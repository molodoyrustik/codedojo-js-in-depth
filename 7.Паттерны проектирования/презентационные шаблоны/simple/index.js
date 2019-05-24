class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

function saveUser(user) {
  console.log('Пользователь сохранен', user);
}

const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const message = document.getElementById('message');
const saveButton = document.getElementById('save');
const resetButton = document.getElementById('reset');

saveButton.addEventListener('click', function(event) {
  let firstname = firstNameInput.value;
  let lastname = lastNameInput.value;

  if (firstname && lastname) {
    let user = new User(firstname, lastname);
    saveUser(user);
    message.textContent = 'Пользователь создан';
  } else {
    message.textContent = 'Введите имя и фамилию!';
  }
})

resetButton.addEventListener('click', function(event) {
  firstNameInput.value = '';
  lastNameInput.value = '';
  message.value = '';
})