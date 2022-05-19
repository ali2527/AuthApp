const express = require("express");
const router = express.Router()
const { dashboard } = require("../../Controllers/dashboard")

router.get("/", dashboard)

module.exports = router