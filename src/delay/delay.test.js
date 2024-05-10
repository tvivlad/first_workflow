// @ts-nocheck
const delay = require('./delay')

describe('delay testing', () => {
  test('корректное значение', async () => {
    const sum = await delay(() => 5 + 10, 1000)
    expect(sum).toBe(15)
  })
})
