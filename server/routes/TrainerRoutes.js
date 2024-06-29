const express = require("express")

const { handleTrainerReq } = require("../controller/handleTrainerReq")
const {handleFetchTrainerReq} = require("../controller/handleFetchTrainerReq")

const router = express.Router()

router.post("/become-trainer", handleTrainerReq)
router.get("/fetch-trainer-req", handleFetchTrainerReq)
router.post("/trainer-signin", )

module.exports = router