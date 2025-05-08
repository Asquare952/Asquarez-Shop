import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import authroute from "./routes/auth.js";
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
// const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"));
app.use(cookieParser());

// connecting backend to frontend
app.use(
  cors({
    origin: "https://asquarez-shop.vercel.app",
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

// Home Page
app.get("/", (req, res) =>{
  res.send("Welcome to home page")
})



// Auth route
app.use("/api/v1", authroute)



// Connect database
const connection = async () =>{
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database successfuly connected");
  } catch (error) {
    console.log(error)
  }
};
connection();




// Listen to server
app.listen(PORT, ()=> {
  console.log(`Server is running on port localhost:${PORT}`);
})