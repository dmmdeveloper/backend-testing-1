import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";


const app = express()

// App Configuration
app.use(express.json({limit:"200kb"}))
app.use(express.urlencoded({limit:"200k" , extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(cors({
    origin : "https://bcknone.vercel.app",
    credentials:true
}

))



// default "/" route

app.get("/" , (req, res)=>{
    console.log(req.url );
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1> Hello Dear I am fine Good</h1>
<h1> <br>
<a href="https://bcknone.vercel.app/user/set-cookie"> Set Cookie</a>

</h1>

<h1>
    <a href="https://bcknone.vercel.app/user/cookie"> Get Cookies</a>
</h1>

    
</body>
</html>`)
})


// Route Importing 
import userRouter from "./routes/user.router.js";


// Routes Declaration
app.use("/user" , userRouter)

export default app
