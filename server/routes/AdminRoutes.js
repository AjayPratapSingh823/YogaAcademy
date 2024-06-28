const express = require("express")

const { handleQueries } = require("../controller/handleQueries")
const { handleAdminDetails } = require("../controller/handleAdminDetails")
const { handleUserData } = require("../controller/handleUserData")

const router = express.Router()

router.get("/fetch-queries", handleQueries)
router.get("/admin-details", handleAdminDetails)
router.get("/user-info", handleUserData)

module.exports = router