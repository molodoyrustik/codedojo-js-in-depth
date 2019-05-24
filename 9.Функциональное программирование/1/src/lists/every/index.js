function every(list, fn) {
  let result = true;
  
  for (let item of list) {
    result = result && fn(item);
  }

  return result;
}

module.exports = every;