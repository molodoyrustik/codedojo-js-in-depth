class Something {
	constructor() {
		// set properties, no business logic
		this.setup();
		this.init();
	}
}

// private property

let private = Symbol();

class Something {
	constructor(public) {
		this[private] = 'private';
		this.public = 'public';
	}
}

// 2 method
let private = new WeakMap();

class Something {
	constructor(public) {
		private.set(this, { value: 'private' });
		this.public = 'public';

		private.get(this).value;
	}
}

// 3 замыкания ...