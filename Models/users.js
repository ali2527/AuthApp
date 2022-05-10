const mongoose = require('mongoose')
const uuid = require("uuid")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        minlength: 3,
        required: true
    },
    lastName: {
        type: String,
        minlength: 3,
        required: true
    },
    phone: {
        type: Number,
        minlength: 9,
    },
    email: {
        type: String,
        minlength: 3,
        required: true,
        unique: true,
        dropDups: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)