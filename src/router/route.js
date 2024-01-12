const express =require("express")
const router = express.Router()
const {authenticate,authorisation} = require('../middleware/auth')
const userContoller = require("../controllers/userController")

//============ Register User =====================
router.post("/register", userContoller.registerUser);

//========== login Api =========================
router.post("/login", userContoller.loginUser);

//=========== get user ==========================
router.get("/user/:userId/profile", authenticate, userContoller.getUser);

//==================update user ================
router.put("/user/:userId/profile",authenticate,authorisation,userContoller.UpdateUser);

//=========== Forget Password ==========================
router.get("/user/:userId/profile", authenticate, userContoller.forgetpassword);




router.all('/*',(req,res)=>{return res.status(400).send({status:false,Message:"please provide valid path"})})


module.exports = router;
