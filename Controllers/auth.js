const User = require("../Models/users")
const {apiResponse} = require("../Helpers")


exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;
        let userExists = await User.findOne({ email: email })
        if (!userExists) {
            return res.status(400).json(apiResponse({}, false, "No Account with This Email Exists"));
        } else if (password !== userExists.password) {
            return res.status(400).json(apiResponse({}, false, "Invalid Password"));
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