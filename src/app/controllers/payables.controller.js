const PayablesRepository = require("../repositories/payables.repository")
const Transaction = require("../models/transaction")

class PayablesController {
  async create(req, res) {
    try {
      const { transaction_id } = req.body

      const transaction = await Transaction.findById(transaction_id)

      if (!transaction) {
        return res.status(404).json({ error: "Transação não encontrada" })
      }

      const payable = await PayablesRepository.create(transaction)

      return res.json(payable)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async findAll(req, res) {
    try {
      const payables = await PayablesRepository.findAll()

      return res.json(payables)

    } catch (err){
      return res.status(400).json(err)
    }
  }

  async findBySearch(req, res) {
    try {
      const { status, amount } = req.query

      const payables = await PayablesRepository.findBySearch({ status, amount })

      return res.json(payables)
    } catch(err){

    }
  }
}

module.exports = new PayablesController()
