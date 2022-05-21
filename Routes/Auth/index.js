const express = require("express");
const router = express.Router()
const { login, signup } = require("../../Controllers/auth")
const {signupValidator, signinValidator} = require("../../Validators/auth")


router.post("/login",signinValidator, login)
router.post("/signup", signupValidator, signup)


module.exports = router



