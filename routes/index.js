const API = require('./api.js')
const view = require('./view.js')
const router = require('express').Router()

router.use('/', view)
router.use('/api', API)

module.exports = router