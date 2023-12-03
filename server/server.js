import express from "express";
import mongoose from "mongoose";




const server = express();
let PORT = process.env.PORT || 3001;

try {
    mongoose.connect("mongodb+srv://aisarthak2:45YuS7tdMClDDgSd@cluster0.mj3b3jf.mongodb.net")
    console.log("Connected to MongoDB successfully✅✅✅😎") 
    
} catch (error) {
    console.log("Unable to connect to MongoDB❌❌❌😥", error)
    process.exit(1);
}


server.listen(PORT, () => console.log(`\n**===** Listening on port ${PORT} **===**\n`));




