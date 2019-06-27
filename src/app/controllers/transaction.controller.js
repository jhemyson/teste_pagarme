const Transaction = require("../models/transaction")

class TransactionController {
  async create(req, res) {
    try {
      const transaction = await Transaction.create(req.body)

      return res.json(transaction)
    } catch (err) {
      return res.status(400).json(err.errors)
    }
  }

  async findAll(req, res) {
    try {
      const transactions = await Transaction.find()

      return res.json(transactions)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  // async findById(req, res) {
  //   try {
  //     const { id } = req.params

  //     const transaction = await Transaction.findById(id)

  //     return res.json(transaction)
  //   } catch (err) {
  //     return res.status(400).json(err)
  //   }
  // }

  // async findBySearch(req, res) {
  //   try {
  //     const transactions = await Transaction.find()

  //     return res.status(transactions)
  //   } catch (err) {
  //     return res.status(400).json(err)
  //   }
  // }

  // async update(req, res) {
  //   try {
  //     const { id } = req.params

  //     const transaction = await Transaction.findByIdAndUpdate(id, req.body)

  //     return res.json(transaction)
  //   } catch (err) {
  //     return res.status(400).json(err)
  //   }
  // }

  // async delete(req, res) {
  //   try {
  //     const { id } = req.params

  //     await Transaction.findByIdAndDelete(id)

  //     return res.json({ message: 'Item deletado com sucesso!' })
  //   } catch (err) {
  //     return res.status(400).json(err)
  //   }
  // }
}

module.exports = new TransactionController()
