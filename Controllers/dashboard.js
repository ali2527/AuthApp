const User = require("../Models/users")
const {apiResponse} = require("../Helpers")


exports.dashboard = async (req, res)=>{
    res.send("Dashboard page")
}