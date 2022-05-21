//imports
const express = require('express');
require("dotenv").config()

// app initilize
const app = express()

// db initilize
require("./Config/db")

// register middleware
app.use(express.json())


// routes register
app.use("/api",require('./Routes'))

//listen server
app.listen(process.env.PORT || 5000 ,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})








