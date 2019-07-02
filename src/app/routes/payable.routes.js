const router = require("express").Router()

const PayableController = require("../controllers/payable.controller")

router.post('', PayableController.create)
router.get('', PayableController.findAll)
router.get('/search', PayableController.findBySearch)

module.exports = router
