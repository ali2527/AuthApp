const jwt = require("jsonwebtoken")
const {apiResponse} = require("../Helpers")
const User = require("../Models/users")

const Authenticate = async(req, res,next) =>{
let token = req.headers['x-access-token'] || req.headers['authorization'];

if(token && token.startsWith('Bearer ')){
    token = token.slice(7, token.length);
}


if(token){
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

    let CurrentUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})

    console.log("currentUser",CurrentUser)

    if(!CurrentUser){
        return res.status(401).json(apiResponse({}, false, "User Not Found"));
    }
    next();
}else{
    return res.status(401).json(apiResponse({}, false, "Token Not found"));
}

}
module.exports = Authenticate;