import { User } from "../models/user.model.js";
import { APIError } from "../utils/apierror.utils.js";
import { APIREsponse, Response } from "../utils/apiresponse.utils.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";

const Register = asyncHandler( async (req , res)=>{    
    console.log(req.url);

// get Data
// empty validation
// findUser in DB;
// create a user
// return res
const {name , email ,password } = req.body ;
console.log(name, email , password);

const requiredFields = [ "name" , "email" , "password"]
for(let field of requiredFields){
    if(!req.body[field]){
        Response(res, `${field} is Required  :))` , 400 )
        throw new APIError(`${field} is Required :))`  , 400)
    }
}


const findUser =  await User.findOne({email})
if(findUser){
    throw new APIError(`User Already Registred :)` , 400)
}

const createUser = await User.create({name , email , password})
console.log(createUser);

    res.status(200)
    .json(
        new APIREsponse("User Regiered success Fully !!" , createUser , 200 )
    )
} )

export { Register}