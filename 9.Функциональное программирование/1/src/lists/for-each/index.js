function forEach(list, fn) {
  for (let i = 0; i < list.length; i++) {
    fn(list[i], i, list);
  }
}

// let list = [];
// forEach(list, (item, index, list) => {});

module.exports = forEach;