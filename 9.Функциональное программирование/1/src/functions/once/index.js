function once(fn) {
  let count = 0;
  return function() {
    if (count === 0) {
      fn();
      count += 1;
    }
  }
}

module.exports = once;