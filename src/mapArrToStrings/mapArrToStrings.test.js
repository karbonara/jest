const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
  test('Корректное значение', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('Некорректное значение', () => {
    expect(mapArrToStrings([1, 2, 3, '4'])).toEqual(['1', '2', '3']);
  });
  test('Пустой массив', () => {
    expect(mapArrToStrings([])).toEqual([]);
  })
});