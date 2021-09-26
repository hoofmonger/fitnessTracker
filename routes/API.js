const router = require('express').Router()
const DB = require('../models')

router.get('/workouts')

router.put('/workouts/:id')

router.post('/workouts')

router.get('/workouts/range')

module.exports = router