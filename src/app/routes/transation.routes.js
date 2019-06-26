const router = require("express").Router()

const TransactionController = require("../controllers/transaction.controller")

router.get('/transactions', TransactionController.findAll)
router.get('/transactions/:id', TransactionController.findById)
router.get('/transactions/search', TransactionController.findBySearch)
router.post('/transactions', TransactionController.create)
router.put('/transactions/:id', TransactionController.update)
router.delete('/transactons/:id', TransactionController.delete)

module.exports = router
