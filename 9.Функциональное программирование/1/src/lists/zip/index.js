function zip(left, right, fn) {
  let result = [];
  for (let i = 0; i < Math.min(left.length, right.length); i++) {
    result.push(fn(left[i], right[i]));
  }
  return result;
}

// let result = zip([1, 2, 3], [-1, -2, -3], (one, second) => {
//   return one + second;
// })
// [1, 2, 3] [-1, -2, -3] -> [0, 0, 0]

module.exports = zip;