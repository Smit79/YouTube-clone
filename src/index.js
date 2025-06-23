// require('dotenv').config({ path : './env'})
import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDb();


/*
import express from 'express';
const app = express();
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.error("ERROR : " , error);
            throw errror
        })

        app.listen( process.env.PORT , () => {
            console.log(`App is listing on port ${process.env.PORT}`);
        })
    }
    catch(errror){
        console.error("ERROR : " , error)
        throw errror
    }
} )()
*/