// functional style
function addItem(list, item) {
  return [...list, item];
}

// oop style

let list = {
  items: [],

  add(item) {
    this.items = [...this(this.items), item];
    return this.items;
  }
}