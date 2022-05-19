const express = require('express')
const router = express.Router() 


router.use('/auth', require('./Auth'))
router.use('/dashboard', require('./Dashboard'))

module.exports = router