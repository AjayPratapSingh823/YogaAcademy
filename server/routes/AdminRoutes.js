const express = require("express")

const { handleQueries } = require("../controller/handleQueries")
const { handleAdminDetails } = require("../controller/handleAdminDetails")

const router = express.Router()

router.get("/fetch-queries", handleQueries)
router.get("/admin-details", handleAdminDetails)

module.exports = router