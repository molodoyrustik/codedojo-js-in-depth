const times = require('./index');

describe('times', () => {
  test('определена', () => {
    expect(times).toBeDefined();
  });

  xtest('возвращает функцию', () => {
    let actual = times();

    expect(actual).toBeInstanceOf(Function);;
  })
});