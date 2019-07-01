const { calculateFee, calculatePaymentDate, defineDefaultStatus } = require("../../../src/app/repositories/helpers/payable.helper")

describe('Payable Helper', () => {

  it('should be able return fee debit card', () => {
    const amount = 200
    const payment_method = "debit_card"

    const response_function = calculateFee(amount, payment_method)

    expect(response_function).toEqual(6)
  })

  it('should be able return fee credit card', () => {
    const amount = 200
    const payment_method = "credit_card"

    const response_function = calculateFee(amount, payment_method)

    expect(response_function).toEqual(10)
  })

  it('should be able return the date to after thirty days with credit card', () => {
    const date = "2019-12-01"
    const payment_method = "credit_card"

    const response_function = calculatePaymentDate(date, payment_method)

    expect(response_function).toBe("2019-12-31")
  })

  it('should be able return the payment date equal to the transaction date with debit card', () => {
    const date = "2019-12-01"
    const payment_method = "debit_card"

    const response_function = calculatePaymentDate(date, payment_method)

    expect(response_function).toBe("2019-12-01")
  })

  it('should be able return the payable status as waiting funds with credit card', () => {
    const payment_method = "credit_card"

    const response_function = defineDefaultStatus(payment_method)

    expect(response_function).toBe("waiting_funds")
  })

  it('should be able return the payable status as paid with debit card', () => {
    const payment_method = "debit_card"

    const response_function = defineDefaultStatus(payment_method)

    expect(response_function).toBe("paid")
  })


})
