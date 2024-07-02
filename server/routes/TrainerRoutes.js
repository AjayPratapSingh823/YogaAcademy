const express = require("express")

const { handleTrainerReq } = require("../controller/handleTrainerReq")
const {handleFetchTrainerReq} = require("../controller/handleFetchTrainerReq")
const { handleTrainerSignin } = require("../controller/handleTrainerSignin")
const { handleFetchTrainers } = require("../controller/handleFetchTrainers")

const router = express.Router()

router.post("/become-trainer", handleTrainerReq)
router.get("/fetch-trainer-req", handleFetchTrainerReq)
router.post("/trainer-signin", handleTrainerSignin)
router.get("/fetch-trainers", handleFetchTrainers)

module.exports = router