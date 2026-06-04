import express from "express"                       //type=module in package.json allows us to use import statement instead of require
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js";          //{} required because connectDB is a named export in db.js, if it were a default export we would import it without {}
import dotenv from "dotenv"

dotenv.config()                                    //load environment variables from .env file
console.log(process.env.MONGO_URL);                //test to check if the environment variable is being read correctly, should print the MongoDB connection string from .env file

// const express = require("express")
const app = express()
const PORT = process.env.PORT || 5001

connectDB() //connect to the database

app.use(express.json())                             //middleware to parse JSON request bodies, this allows us to access req.body in our route handlers
app.use("/api/notes",notesRoutes)                   //middleware to use the routes defined in notesRoutes.js, all routes will be prefixed with /api/notes


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

