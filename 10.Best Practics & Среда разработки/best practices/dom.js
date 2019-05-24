// good
let list = document.querySelector('#logo-default');
let fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
	let listItem = document.createElement('li');
	fragment.appendChild(listItem);
}
list.appendChild(fragment);


// bad
for (let i = 0; i < 100; i++) {
	let list = document.querySelector('#logo-default');
	let listItem = document.createElement('li');
	list.appendChild(listItem);
}


