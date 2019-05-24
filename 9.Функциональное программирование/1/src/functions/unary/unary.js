function unary(fn) {
  return (arg) => fn(arg);
}

// ['1', '2', '3', '4','5','6'].map(unary(parseInt))

module.exports = unary;