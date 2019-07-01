const router = require("express").Router()

const TransactionController = require("../controllers/transaction.controller")

router.get('', TransactionController.findAll)
router.post('', TransactionController.create)


module.exports = router
