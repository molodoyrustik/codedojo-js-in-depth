function pipe(...fns) {
  return function(args) {
    let result = args;
    for(let fn of fns) {
      result = fn(result);
    }
    return result;
  }
}