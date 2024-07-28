import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import userModel from "./models/user.model.js";

dotenv.config({
    path: "./.env",
});
const app = express();
connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((error) => {
    console.error(error);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});