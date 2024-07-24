import express from "express";
import dotenv from "dotenv";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

dotenv.config({
    path: "./env",
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});