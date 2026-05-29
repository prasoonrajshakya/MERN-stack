import express from "express"           //type=module in package.json allows us to use import statement instead of require
import notesRoutes from "./routes/notesRoutes.js"

// const express = require("express")
const app = express()

app.use("/api/notes",notesRoutes) //middleware to use the routes defined in notesRoutes.js, all routes will be prefixed with /api/notes


app.listen(5001,()=>{
    console.log("Server is running on port 5001");
})