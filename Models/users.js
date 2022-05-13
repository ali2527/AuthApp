const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken');
const { token } = require('morgan');


const saltRounds = 10;

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
    },
    tokens:[
        {
            token:{
                type: String,
                required: true,
            }
        }
    ]
}, { timestamps: true })

userSchema.pre('save',async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,saltRounds)
    }
    next();
})

userSchema.methods.generateToken = async function(){
    try {
        let myToken = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:myToken})
        await this.save();
        return myToken;
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongoose.model("User", userSchema)