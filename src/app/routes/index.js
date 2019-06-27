const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("Hello Api")
})

router.use("/1/transactions", require("./transation.routes"))
router.use("/1/payables", require("./payable.routes"))

module.exports = router
