const { body, validationResult, check  } = require('express-validator');
const {apiResponse} = require("../Helpers/index")
const User = require("../Models/users")

exports.signupValidator = [
    check('email',"Email is Required").not().isEmpty().isEmail().withMessage("Email is Invalid"),
    body('email').custom(value=>{
      return User.findOne({email:value}).then(userExists =>{
        if (userExists) {
          return Promise.reject('E-mail already in use');
        }
      })
    }),
    check('firstName',"First Name is Required").not().isEmpty(),
    check('lastName',"Last Name is Required").not().isEmpty(),
    body('password').not().isEmpty().withMessage("Password is Required"),
    function(req, res, next){
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json(apiResponse({},false,errors.array()[0].msg));
       }
       next()
    }
 ]