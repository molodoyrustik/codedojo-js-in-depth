function curry (fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function(...next) {
        return curried(...args, ...next);
      }
    }

    return fn(...args);
  }
}

module.exports = curry;

// let createLog = curry((fn, prefix, message) => {
//   return fn(`${prefix}: ${message}`);
// })

// let log = createLog(console.log)('DEBUG');
// let logError = createLog(console.error)('ERROR');
// log('Curring');
// logError('TypeError');