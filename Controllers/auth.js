const User = require("../Models/users")
const {apiResponse} = require("../Helpers")


exports.login = (req, res) => {
    console.log(req.body)
    res.send("login page")
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