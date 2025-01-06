import { Router } from "express";
import { file, Register } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";



const userRouter  = Router()



userRouter.route("/register").post(Register)
userRouter.route("/file").post( upload.single("file"), file)

export default userRouter ;