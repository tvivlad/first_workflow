// @ts-nocheck
const square = require('./square')

describe('проверка функции возведения в квадрат', () => {
  let mockValue

  // эти действия будут выполняться перед каждым тестом
  beforeEach(() => {
    // например, что-то может быть добавлено в базу данных
  })
  // выполняется один раз перед всеми тестами
  beforeAll(() => {})
  test('не корректное значение', () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })

  test('корректное значение', () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    jest.clearAllMocks()
    //например, что-то может быть удалено из БД
  })

  afterAll(() => {})
})
