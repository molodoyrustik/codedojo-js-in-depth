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

function partial(fn, ...args) { // [undefined, 0]
  return function(...rest) { // [fn]
    let nextArgs = rest.slice();
    let fullArgs = args.map(arg => arg === undefined ? nextArgs.shift() : arg) // [fn, 0]
    return fn(...fullArgs);
  }
}

function reduce(list, fn, initialValue) {
  let acc;
  if (initialValue !== undefined) {
    acc = initialValue;
  } else {
    acc = list[0];
  }
  if (initialValue) {
    for (let item of list) {
      acc = fn(acc, item, list);
    }
  } else {
    for (let i = 1; i < list.length; i++) {
      acc = fn(acc, list[i], list);
    }
  }
  return [acc];
}

function forEach(list, fn) {
  for (let i = 0; i < list.length; i++) {
    fn(list[i]);
  }
}

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

function map(list, fn) {
  let res = [];

  for (let i = 0; i < list.length; i++) {
    res[i] = fn(list[i], i, list);
  }

  return res;
}

const movies = [
  {
    id: 1,
    title: 'KFJDKS',
    uri: 'sdfsdf',
    rating: 4.0
  },
  {
    id: 2,
    title: 'KFJDKS',
    uri: 'sdfsdf',
    rating: 4.0
  },
  {
    id: 3,
    title: 'sdf12',
    uri: 'sdfsdf',
    rating: 6.0
  }
]


// function compose(...fns) {
//   return function(args) {
//     let result = args;
//     for(let fn of fns.reverse()) {
//       result = fn(result);
//     }
//     return result;
//   }
// }

const compose = (...fns) => (arg) => {
  return fns.reduce((composed, f) => f(composed),arg);
}

function pipe(...fns) {
  return function(args) {
    let result = args;
    for(let fn of fns) {
      result = fn(result);
    }
    return result;
  }
}

let printGreatMovieTitles = pipe(
  partial(filter, undefined, movie => movie.rating > 5.0),
  partial(map, undefined, movie => movie.title),
  partial(forEach, undefined, console.log),
);

printGreatMovieTitles(movies);
