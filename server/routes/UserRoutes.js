const router=express.Router();
const UserSignup= require('../controller/UserSignup')

router.post("/signup",UserSignup);

module