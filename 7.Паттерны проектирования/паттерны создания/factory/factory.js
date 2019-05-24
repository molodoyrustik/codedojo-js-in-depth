function create(type) {
  switch(type) {
    case 'type 1':
      return new Type1();
    case 'type 2':
      return new Type2();
    case 'type 3':
      return new Type3();
    default:
      throw new Error('invalid type');
  }
}

let object = create('type 1');