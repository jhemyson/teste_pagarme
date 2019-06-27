const router = require("express").Router()

const TransactionController = require("../controllers/transaction.controller")

router.get('', TransactionController.findAll)
router.get('/:id', TransactionController.findById)
router.get('/search', TransactionController.findBySearch)
router.post('', TransactionController.create)
router.put('/:id', TransactionController.update)
router.delete('/:id', TransactionController.delete)

module.exports = router
