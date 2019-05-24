function filter(list, fn) {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    const flag = fn(list[i], i, list);
    if (flag === true) {
      result = [...result, list[i]]
    }
  }

  return result;
}

module.exports = filter;