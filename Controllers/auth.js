const User = require("../Models/users")
const {apiResponse} = require("../Helpers")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;
        let userExists = await User.findOne({ email: email })

        let isMatch = await bcrypt.compare(password,userExists.password)

        let token = await userExists.generateToken();
        console.log(token)
        if (!userExists) {
            return res.status(400).json(apiResponse({}, false, "No Account with This Email Exists"));
        } else if (!isMatch) {
            return res.status(400).json(apiResponse({}, false, "Invalid Credentials"));
        }
        return res.status(200).json(apiResponse(userExists, true, "Login Successful"));
    } catch (error) {
        console.log(error)
    }
}

exports.signup = (req, res) => {
    const { firstName, lastName, phone, email, password } = req.body;
    // const user = new User({firstName,lastName,phone,email,password})

    User.create({ firstName, lastName, phone, email, password }, (err, data) => {
        if (err) {
            return res.status(400).json(apiResponse({}, false, err));
        }
        res.status(200).json(apiResponse(data, true, "User Data Saved"));
    })
}