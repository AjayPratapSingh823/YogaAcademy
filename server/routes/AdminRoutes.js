const express = require("express")

const { handleQueries } = require("../controller/handleQueries")

const router = express.Router()

router.get("/fetch-queries", handleQueries)

module.exports = router