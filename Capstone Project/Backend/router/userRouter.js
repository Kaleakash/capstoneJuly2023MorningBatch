let express = require("express");

let router = express.Router();

let userController = require("../controller/userController");

router.post("/signIn",userController.signIn);
router.post("/signUp",userController.signUp);


module.exports=router;