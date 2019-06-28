const router = require("express").Router()

const PayablesController = require("../controllers/payables.controller")

router.post('', PayablesController.create)
router.get('', PayablesController.findAll)
router.get('/search', PayablesController.findBySearch)

module.exports = router
