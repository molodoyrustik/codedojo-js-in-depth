// обычная функция wait
function wait(timeout, done) {
  setTimeout(done, timeout);
}

wait(3000, () => console.log('done'))

// функция wait с promise
function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  })
}

wait(3000).then(() => console.log('done'));

// передача аргументов в resolve
let promise = new Promise(resolve => {
  resolve(42);
})

promise.then(value => console.log(value));

// обработка ошибок в promise
function run() {
  return new Promise(resolve, reject => {
    if (true) {
      resolve();
    } else {
      reject();
    }
  })
}

let promise = run();

promise.then(
  () => console.log('resolve'),
  () => console.log('reject')
);