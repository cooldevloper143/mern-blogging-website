import express from "express";

const server = express();

let PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});