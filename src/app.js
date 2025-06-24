import express from 'express'
import cors from 'cors'
import cookieParse from 'cookie-parse'
import e from 'express';
const app = express();

app.use( cors ({
    origin: process.env.CORS_ORIGIN,
    cardentials: true
}))

app.use(express.json({ limit : "16kb"}))
app.use(express.urlencoded({ extended: true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParse())

// app.on("error",(error) => {
//     console.error("ERROR : " , error);
//     throw errror
// })

export { app }