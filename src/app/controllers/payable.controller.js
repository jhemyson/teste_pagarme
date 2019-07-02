const PayableRepository = require("../repositories/payable.repository")
const TransactionRepository = require("../repositories/transaction.repository")

class PayableController {
  async create(req, res) {
    try {
      const { transaction_id } = req.body

      const transaction = await TransactionRepository.findById(transaction_id)

      if (!transaction) {
        return res.status(404).json({ error: "Transação não encontrada" })
      }

      const payable = await PayableRepository.create(transaction)

      return res.json(payable)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async findAll(req, res) {
    try {
      const payables = await PayableRepository.findAll(req)

      return res.json(payables)

    } catch (err){
      return res.status(400).json(err)
    }
  }

  async findBySearch(req, res) {
    try {
      const { status, amount, transaction_id } = req.query

      const payables = await PayableRepository.findBySearch(req, { status, amount, transaction_id })

      return res.json(payables)
    } catch(err){
      return res.status(400).json(err)
    }
  }
}

module.exports = new PayableController()
