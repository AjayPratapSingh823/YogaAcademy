const router=express.Router();
const { UserLogin } = require('../controller/UserLogin');
const {UserSignup}= require('../controller/UserSignup')

router.post("/user-signup",UserSignup);
router.post('/user-login',UserLogin)
module.exports = router;