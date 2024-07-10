const express = require("express")

const { handleQueries } = require("../controller/handleQueries")
const { handleAdminDetails } = require("../controller/handleAdminDetails")
const { handleUserData } = require("../controller/handleUserData")
const { handleAddingClasses } = require("../controller/Classes/handleAddingClasses")
const {fetchKidsClasses} = require("../controller/Classes/FetchKidsClass")

const router = express.Router()

router.get("/fetch-queries", handleQueries)
router.get("/admin-details", handleAdminDetails)
router.get("/user-info", handleUserData)
router.post('/add-class',handleAddingClasses)
router.get('/get-class',fetchKidsClasses);

module.exports = router