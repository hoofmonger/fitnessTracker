const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 9001
require('dotenv').config()

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

app.use(require('./routes/index.js'))

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})