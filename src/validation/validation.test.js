// @ts-nocheck
const validation = require('./validation')

// test('Валидное значение', () => {
//   expect(validation(70)).toBe(true)
// })

describe('Проверка фукции validation', () => {
  test('Валидное значение', () => {
    expect(validation(70)).toBe(true)
  })
  test('Значение меньше валидного', () => {
    expect(validation(-2)).toBe(false)
  })
  test('Значение больше валидного', () => {
    expect(validation(101)).toBe(false)
  })
  test('Значение на нижней границе', () => {
    expect(validation(0)).toBe(true)
  })
  test('Значение на верхней границе', () => {
    expect(validation(100)).toBe(true)
  })
})
