const { getTheLastFourCardNumbers, getThelastDayOfTheMonth } = require("../../../src/app/repositories/helpers/transaction.helper")

describe('Payable Helper', () => {

  it('should be able to the last four card numbers', () => {
    const card_number = "4444555566667777"

    const response_function = getTheLastFourCardNumbers(card_number)

    expect(response_function).toBe("7777")
  })

  it('should be able the last day of month', () => {
    const card_date = "2020-12"

    const response_function = getThelastDayOfTheMonth(card_date)

    expect(response_function).toBe("2020-12-31")
  })

})
