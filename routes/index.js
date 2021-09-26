const API = require('./API')
const view = require('./view')
const router = require('express').Router()

router.use('/', view)
router.use('/api', API)

module.exports = router