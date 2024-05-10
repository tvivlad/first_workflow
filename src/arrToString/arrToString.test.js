// @ts-nocheck
const arrToString = require('./arrToString')

describe('arrToString testing', () => {
  test('Корректное значение', () =>
    // expect(arrToString([1, 2, 3])).toBe(['1', '2', '3']))
    expect(arrToString([1, 2, 3])).toEqual(['1', '2', '3']))
})
