const router = require('express').Router()
const DB = require('../models')

router.get('/workouts', async (req, res)=>{
    try {
        DB.Workout.aggregate([{
            $addFields: {
                totalDuration: {$sum:'$exercises.duration'}
            }
        }]).sort({
            day: 1
        }).then((data)=>res.json(data))
    } catch (error) {
        console.log("it don't get", error)
    }

})

router.put('/workouts/:id', async (req, res)=>{
try {
    const updatedWorkOut = await DB.Workout.findByIdAndUpdate(req.params.id, {$push:{exercises: req.body}})
    res.json(updatedWorkOut)
} catch (error) {
    console.log("it don't put", error)
}
})

router.post('/workouts', async (req, res)=>{
try {
    const newWorkOut = await DB.Workout.create(req.body)
    res.json(newWorkOut)
} catch (error) {
    console.log('it don\'t post', error)
}
})

router.get('/workouts/range', async (req, res)=>{
    try {
        DB.Workout.aggregate([{
            $addFields: {
                totalDuration: {$sum:'$exercises.duration'}
            }
        }]).sort({
            _id: -1
        }).limit(7)
        .then((data)=>res.json(data))
    } catch (error) {
        console.log("it don't get range", error)
    }
})

module.exports = router