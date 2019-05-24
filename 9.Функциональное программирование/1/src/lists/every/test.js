const every = require('./index');

describe('every', () => {

  test('определена', () => {
    expect(every).toBeDefined();
  });

  test('возвращает true если все элементы массива проходят проверку', () => {
    let list = [{id: 1}, {id: 2}];
    let actual = every(list, item => item.id ? true : false);

    exprect(actual).toBe(true);
  })

  test('возвращает false если не все элементы массива проходят проверку', () => {
    let list = [{id: 1}, {id: 2}, {}];
    let actual = every(list, item => item.id ? true : false);

    exprect(actual).toBe(false);
  });

});