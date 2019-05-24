const createMap = require('./map.js');

let dictionary = createMap();
let contacts = createMap();

dictionary.set('hello', 'hola')
	.set('goodbye', 'adios')
	.set('thank you', 'gracias');

contacts.set('Douglas Crockgord', 'douglas@crockgord.com')
	.set('Kyle Simpson', 'getify@gmail.com')

console.log(dictionary.entries);
console.log(contacts.entries);