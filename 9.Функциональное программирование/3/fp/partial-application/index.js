function partial(fn, ...args) { // [undefined, 0]
  return function(...rest) { // [fn]
    let nextArgs = rest.slice();
    let fullArgs = args.map(arg => arg === undefined ? nextArgs.shift() : arg) // [fn, 0]

    return fn(...fullArgs);
  }
}