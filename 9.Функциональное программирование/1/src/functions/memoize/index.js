function memoize(fn) {
  let store = {};
  return function(arg){
    if(store[arg]) {
      return store[arg];
    } else {
      store[arg] = fn(arg);
      return store[arg];
    }
  }
}

// function getElement(selector) {
//   return document.querySelector(selector);
// }
// getElement = memoize(getElement);
// let button = getElement('#save-button');


module.exports = memoize;