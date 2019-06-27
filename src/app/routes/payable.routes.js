const router = require("express").Router()

const PayablesController = require("../controllers/payables.controller")

router.post('', PayablesController.create)


module.exports = router
