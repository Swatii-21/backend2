// require('dotenv').config({paht:'.env'})

import dotenv from "dotenv" 

import mongoose from "mongoose"
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'
})


connectDB() 
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : $
            {process.env.PORT}`) ; 
    })
})
.catch((err) => {
    console.log("MONGO db connection faile !!!" , err);
})






/*import express from "express"
const app = express()

// function connectDB(){}

// connectDB()

(async() => {
    try{
      await mongoose.connect(`${process.env.
        MONGODE_URI}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("ERR: " , error);
            throw error 
        })

        app.listen(process.env.PORT , () => {
            console.log(`App is listening on port $
                {process.env.PORT}`);
        })
    } catch (error){
        console.error("ERROR : " , error )
        throw err 
    }
})()
    */
