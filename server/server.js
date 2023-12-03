import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';




const server = express();
let PORT = process.env.PORT || 3001;

try {
    mongoose.connect(process.env.DB_LOCATION , {
         autoIndex: true,

    })
    console.log("Connected to MongoDB successfully✅✅✅😎") 
    
} catch (error) {
    console.log("Unable to connect to MongoDB❌❌❌😥", error)
    process.exit(1);
}


server.listen(PORT, () => console.log(`\n**===** Listening on port ${PORT} **===**\n`));




