//imports
const express = require('express');
require("dotenv").config()
const mongoose = require('mongoose')


// app initilize
const app = express()

// db initilize
const db = require("./Config/db")

// register middleware
app.use(express.json())


// routes register
app.use("/api",require('./Routes'))

//listen server
app.listen(process.env.PORT || 5000 ,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})








