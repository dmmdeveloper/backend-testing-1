import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";


const app = express()

// App Configuration
app.use(express.json({limit:"200kb"}))
app.use(express.urlencoded({limit:"200k" , extended:true}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(cors())



// default "/" route

app.get("/" , (req, res)=>{
    console.log(req.url );
    res.send(`<h1> Hello My Backend Deployment Testing..</h1>`)
})


// Route Importing 
import userRouter from "./routes/user.router.js";


// Routes Declaration
app.use("/user" , userRouter)

export default app
