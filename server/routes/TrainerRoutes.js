const express = require("express")

const { handleTrainerReq } = require("../controller/handleTrainerReq")
const {handleFetchTrainerReq} = require("../controller/handleFetchTrainerReq")
const { handleTrainerLogin } = require("../controller/handleTrainerSignin")

const router = express.Router()

router.post("/become-trainer", handleTrainerReq)
router.get("/fetch-trainer-req", handleFetchTrainerReq)
router.post("/trainer-signin", handleTrainerLogin)

module.exports = router