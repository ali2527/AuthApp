const express = require("express");
const router = express.Router()

router.get("/login",(req,res)=>{
    res.send("login Route")
})

router.get("/signup",(req,res)=>{
    res.send("signup Route")
})

module.exports = router