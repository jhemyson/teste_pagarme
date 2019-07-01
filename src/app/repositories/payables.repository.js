const Payables = require("../models/payables")
const { calculateFee, calculatePaymentDate, defineDefaultStatus } = require("./helpers/payable.helper")
const { getNonNullFilters } = require("./helpers/common.helper")
const { mongoosePaginationOptions } = require("./helpers/pagination.helper")

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

  async findAll(request){
    const pagination_options = mongoosePaginationOptions(request)

    return await Payables.paginate({}, pagination_options)
  }

  async findBySearch(request, filter_object){
    const pagination_options = mongoosePaginationOptions(request)

    const filters = getNonNullFilters(filter_object)

    return await Payables.paginate(filters, pagination_options)
  }
}

module.exports = new PayablesRepository()
