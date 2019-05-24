class List {
  get() {

  }

  add() {

  }

  find() {

  }
}

class ListProxy {
  constructor() {
    this.list = null;
  }

  initialize() {
    if (!this.list) {
      this.list = new List();
    }
  }

  get() {
    this.initialize();
    return this.list.get();
  }

  add() {
    this.initialize();
    return this.list.add();
  }

  find() {
    this.initialize();
    return this.list.find();
  }
}

let listProxy = new ListProxy();

list.add('sdfdf');