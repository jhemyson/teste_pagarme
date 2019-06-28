const Payables = require("../models/payables")
const { calculateFee, calculatePaymentDate, defineDefaultStatus } = require("./helpers/payable.helper")
const { getNonNullFilters } = require("./helpers/common.helper")

class PayablesRepository {

  async create(transaction_object){
    const { id ,amount, payment_method, createdAt } = transaction_object

    return await Payables.create({
      object: 'payable',
      status: defineDefaultStatus(payment_method),
      amount,
      fee: calculateFee(amount , payment_method),
      payment_date: calculatePaymentDate(createdAt, payment_method),
      transaction_id: id
    })
  }

  async findAll(){
    return await Payables.find()
  }

  async findBySearch(filter_object){
    const filters = getNonNullFilters(filter_object)

    return await Payables.find(filters)
  }
}

module.exports = new PayablesRepository()
