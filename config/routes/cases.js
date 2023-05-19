const router = require("express").Router()

// controller
const cases = require("../../app/controllers/casesControllers")

router.get("/",cases.getCases)
router.get("/:id",cases.getCasesById)

module.exports = router