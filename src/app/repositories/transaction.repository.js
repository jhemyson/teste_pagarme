const Transaction = require("../models/transaction")
const { getTheLastFourCardNumbers, getThelastDayOfTheMonth } = require("./helpers/transaction.helper")
const { mongoosePaginationOptions  } = require("./helpers/pagination.helper")

class TransactionRepository {
  async create(transaction_object){
    const { card_number, card_expiration_date } = transaction_object

    return await Transaction.create({
      ...transaction_object,
      object: 'transaction',
      card_number: getTheLastFourCardNumbers(card_number),
      card_expiration_date: getThelastDayOfTheMonth(card_expiration_date)
    })
  }

  async findAll(request){
    const pagination_options = mongoosePaginationOptions(request)

    return await Transaction.paginate({}, pagination_options)
  }

  async findById(transaction_id){
    return await Transaction.findById(transaction_id)
  }
}

module.exports = new TransactionRepository()
