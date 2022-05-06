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

userSchema.method = {
    encryptPassword: function (password) {
        let user = this
        if (!password) return;

        try {
            const salt = uuid()
            user.password = crypto.createHmac("sha1", salt)
        } catch (error) {
            return ""
        }
    }
}



module.exports = mongoose.model("Users", userSchema)