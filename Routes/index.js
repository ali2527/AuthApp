const express = require('express')
const router = express.Router() 


router.use('/auth', require('./Auth'))

module.exports = router