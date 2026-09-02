import express from "express"; //type=module in package.json allows us to use import statement instead of require
import dotenv from "dotenv";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"; //{} required because connectDB is a named export in db.js, if it were a default export we would import it without {}
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); //load environment variables from .env file
//console.log(process.env.MONGO_URL); //test to check if the environment variable is being read correctly, should print the MongoDB connection string from .env file

// const express = require("express")
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}
app.use(express.json()); //middleware to parse JSON request bodies, this allows us to access req.body in our route handlers
app.use(rateLimiter); //middleware to apply rate limiting to all routes, this will limit the number of requests a client can make in a given time period, preventing abuse and ensuring fair usage of the API

//simple coded custom middleware
// app.use((req, res, next) => {
//   console.log("new request gotten");
//   next(); //
// });
app.use("/api/notes", notesRoutes); //middleware to use the routes defined in notesRoutes.js, all routes will be prefixed with /api/notes

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.use((req, res) => {
    if (req.path.startsWith("/api"))
      return res.status(404).json({ message: "Not found" });
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}); //connect to the database the start listening
