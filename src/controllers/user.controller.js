import { APIREsponse } from "../utils/apiresponse.utils.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";


const Register = asyncHandler( async (req , res)=>{

    console.log(req.url);





    res.status(200)
    .json(
        new APIREsponse("User Regiered success Fully !!" , { } , 200 )
    )
} )

export { Register}