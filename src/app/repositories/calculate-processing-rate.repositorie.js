const rate_by_payment_method = {
  debit_card: 0.3,
  credit_card: 0.5
}

class CalculateProcessingRate {
  calculate(amout_value, payment_method) {
    return amout_value * rate_by_payment_method[payment_method]
  }
}

module.exports = new CalculateProcessingRate();
