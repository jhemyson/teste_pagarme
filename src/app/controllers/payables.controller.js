const Payables = require("../models/payables")
const Transaction = require("../models/transaction")

class PayablesController {
  async create(req, res) {
    try {
      const { transaction_id } = req.body

      const transaction = await Transaction.findById(transaction_id)

      if (!transaction) {
        return res.status(404).json({ error: "Transação não encontrada" })
      }

      const payable = Payables.create({
        ...req.body,
        amout: transaction.amout,
        fee: payable.setFee(transaction.payment_method)
      })

      return res.json(payable)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}

module.exports = new PayablesController()
