function times(num, fn) {
  let count = 0;

  while (true) {
    if(count === num) break;
    fn(count++);
  }
}

module.exports = times;