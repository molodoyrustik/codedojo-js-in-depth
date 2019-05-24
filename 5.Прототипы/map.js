let mapPrototype = {
	get size() {
		let size = 0;
		for (let key in this.store) {
			size += 1;
		}
		return size;
	},
	set size(value) {
		if (value === 0) {
			this.clear();
		}
	},
	get keys() {
		let keys = [];
		for (let key in this.store) {
			keys.push(key);
		}
		return keys;
	},
	get values() {
		let values = [];
		for (let key in this.store) {
			values.push(this.store[key]);
		}
		return values;
	},
	get entries() {
		let entries = [];
		for (let key in this.store) {
			entries.push({
				key,
				value: this.store[key]
			});
		}
		
		return entries;
	},
	has(key) {
		return key in this.store;
	},
	get(key) {
		return this.store[key];
	},
	set(key, value) {
		this.store[key] = value;
		return this;
	},
	delete(key) {
		return delete this.store[key];
	},
	clear() {
		this.store = {};
	},
	forEach(callback) {
		for (let key in this.store) {
			let value = this.store[key];
			callback(value, key, this);
		}
	},
	[Symbol.iterator]() {
		let values = this.values.slice();
		return {
			next() {
				let value = values.shift();
				
				return {
					value,
					done: Boolean(value) ? false : true
				}
			}
		}
	}
}

createMap.prototype = mapPrototype;
createMap.prototype.constructor = createMap;

function createMap() {
	this.store = {}
}


module.exports = createMap;