import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();

app.use( cors ({
    origin: process.env.CORS_ORIGIN,
    cardentials: true
}))

app.use(express.json({ limit : "16kb"}))
app.use(express.urlencoded({ extended: true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// router import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/user" , userRouter)

// app.on("error",(error) => {
//     console.error("ERROR : " , error);
//     throw errror
// })

export { app }