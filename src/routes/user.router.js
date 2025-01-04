import { Router } from "express";
import { Register } from "../controllers/user.controller.js";



const userRouter  = Router()



userRouter.route("/register").get(Register)

export default userRouter ;