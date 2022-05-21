const express = require("express");
const router = express.Router()
const { dashboard } = require("../../Controllers/dashboard")
const authenticate = require("../../Middleware/authenticate")

router.get("/",authenticate, dashboard)

module.exports = router