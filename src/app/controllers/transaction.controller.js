const TransactionRepository = require("../repositories/transaction.repository")
const PayableRepository = require("../repositories/payable.repository")

class TransactionController {
  async create(req, res) {
    try {
      const transaction = await TransactionRepository.create(req.body)

      if(transaction){
        await PayableRepository.create(transaction)
      }

      return res.json(transaction)
    } catch (err) {
      return res.status(400).json(err.errors)
    }
  }

  async findAll(req, res) {
    try {
      const transactions = await TransactionRepository.findAll(req)

      return res.json(transactions)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}

module.exports = new TransactionController()
