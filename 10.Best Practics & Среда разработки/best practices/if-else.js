let isAdmin = false;
let role;

if (isAdmin) {
	role = 'admin';
} else {
	role = 'user'
}

// or
let isAdmin = false;
let role = isAdmin ? 'admin' : 'user';

// or

array.forEach((item, i, array) => {
	return fn(array[i], i, array) && result.push(array[i]);
})
