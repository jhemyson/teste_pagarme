const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("Hello Api")
})

router.use("/1/", require("./transation.routes"))

module.exports = router
