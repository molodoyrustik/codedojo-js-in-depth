// первый вариант с помощью модуля
// const singleton = (function() {
//   let instance;

//   function createInstance() {
//     return {};
//   }

//   return {
//     getInstance() {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     }
//   }
// })();


// второй вариант с помощью класса
// class Singleton {
//   static getInstance() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }

//     return Singleton.instance;
//   }

//   constructor() {
//     this.foo = 'foo';

//     if (!Singleton.instance) {
//       Singleton.instance = this;
//     }

//     return Singleton.instance;
//   }
// }

// console.log(Singleton.getInstance());

// третий пример
const Cart = (function() {
  let instance;

  return class {
    constructor() {
      this.products = [];

      if (!instance) {
        instance = this;
      }
      return instance;
    }
  }
})()

let cart = new Cart();
let cart2 = new Cart();

console.log(cart);
console.log(cart2);
console.log(cart === cart2);
