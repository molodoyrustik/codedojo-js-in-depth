const once = require('./index');

describe('once', () => {
  test('определена', () => {
    expect(once).toBeDefined();
  });
  test('возвращает функцию', () => {
    let actual = once();

    expect(actual).toBeInstanceOf(Function);;
  })

  xtest('ограничивает вызов фн', () => {
    let fn = jest.fn();

    let onced = once(fn);

    expect(fn.mock.calls.length).toBe(1);
  })
});