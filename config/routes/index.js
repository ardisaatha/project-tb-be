const router = require("express").Router()

const cases = require("./cases")

// API
router.use("/api/cases/", cases)

module.exports = router