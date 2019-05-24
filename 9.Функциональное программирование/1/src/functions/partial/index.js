// частичное приминение
function partial(fn, ...args) { // [undefined, 0]
  return function(...rest) { // [fn]
    let nextArgs = rest.slice();
    let fullArgs = args.map(arg => arg === undefined ? nextArgs.shift() : arg) // [fn, 0]

    return fn(...fullArgs);
  }
}

// Example 1
let wait = partial(delay, undefined, 500);
wait(() => console.log('Done'));

// Example 2 OOP STYLE
let http = {
  get(url, done) {}
}
class ApiClient {
  constructor(http, url, endpoints) {
    this.http = http;
    this.url = url;
    this.endpoints = endpoints;
  }
  getUsers(entity, done) {
    this.http.get(`${this.url}/${endpoints[entity]}`, done);
  }
}
let apiClient = new ApiClient(http, 'https://codedojo.ru', { users: '/users'});
apiClient.get('users', user => console.log(users));

// Example 2 FN STYlE
let http = {
  get(url, done) {},
  post(url, done) {}
}

let getUsers = partial(http.get, 'https://codedojo.ru/users');
let createUser = partial(http.post, 'https://codedojo.ru/users');

getUsers(users => console.log(users));
createUser({}, user => console.log(user));

module.export = partial;