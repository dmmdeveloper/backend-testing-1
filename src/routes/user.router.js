import { Router } from "express";
import { Register } from "../controllers/user.controller.js";



const userRouter  = Router()



userRouter.route("/register").post(Register)

export default userRouter ;