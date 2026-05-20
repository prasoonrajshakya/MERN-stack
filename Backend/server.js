import express from "express"           //type=module in package.json allows us to use import statement instead of require
// const express = require("express")
const app = express()


app.get("/api/notes",(req,res) =>{ //when we hit this endpoint, we want to send back some data......this is an api
    res.send("Hello World");
})

app.listen(5001,()=>{
    console.log("Server is running on port 5001");
});