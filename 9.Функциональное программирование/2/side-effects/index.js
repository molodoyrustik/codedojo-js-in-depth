// functional style
let count = 0;

function increment() {
  return count += 1;
}

let items = [];

function addItem(item) {
  items.push(item);
}

function getInput() {
  return prompt();
}

function oops() {
  throw new Error('Ooops');
}

function print(value) {
  console.log(value);
}

function getDate() {
  return new Date(Date.now());
}

function getUsers(done) {
  User.find().then(done);
}
// oop style

let counter = {
  count: 0,

  increment() {
    this.count += 1;
  }
}

let list = {
  items: [],

  add(item) {
    this.items.push(item);
  }
}