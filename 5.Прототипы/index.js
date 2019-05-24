const createMap = require('./map.js');

let dictionary = new createMap();
let contacts = new createMap();

dictionary.set('hello', 'hola')
	.set('goodbye', 'adios')
	.set('thank you', 'gracias');

contacts.set('Douglas Crockgord', 'douglas@crockgord.com')
	.set('Kyle Simpson', 'getify@gmail.com')

console.log(dictionary);
console.log(dictionary.entries);