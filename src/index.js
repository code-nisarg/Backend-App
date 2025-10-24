import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
dotenv.config();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Failed to connect to MongoDB", error);
//     }
// })()
connectDB();