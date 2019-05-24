function compose(...fns) {
  return function(args) {
    let result = args;
    for(let fn of fns.reverse()) {
      result = fn(result);
    }
    return result;
  }
}