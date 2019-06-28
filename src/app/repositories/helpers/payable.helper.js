const moment = require("moment")

const payment_types = {
  debit_card: {
    fee: 0.03,
    default_status: 'paid',
    days_for_payment: 0
  },
  credit_card: {
    fee: 0.05,
    default_status: 'waiting_funds',
    days_for_payment: 30
  }
}

module.exports = {
  calculateFee(amount, payment_method){
    return amount * payment_types[payment_method]['fee']
  },

  calculatePaymentDate(date, payment_method){
    return moment(date)
      .add(payment_types[payment_method]['days_for_payment'], 'days')
      .format('YYYY-MM-DD')
  },

  defineDefaultStatus(payment_method){
    return payment_types[payment_method]['default_status']
  }
}
