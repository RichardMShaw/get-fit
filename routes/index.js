const router = require('express').Router()

router.use('/api', require('./dateRoutes.js'))

module.exports = router
