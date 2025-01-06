import { Router } from "express";
import { file, params, Register } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";



const userRouter  = Router()



userRouter.route("/register").post(Register)
userRouter.route("/file").post( upload.single("file"), file)
userRouter.route("/param/:param").post(params)

export default userRouter ;