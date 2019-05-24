function sortBy(prop) {
  return function(a, b) {
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
    return 0;
  }
}

let sortById = sortBy('id');
let sortByFirstName = sortBy('firstname');

let users = [{id: 5}, {id: 2}, {id: 3}];
let sortedUsers = sort(users, sortById);

console.log(users);
console.log(sortedUsers);

module.exports = sortBy;