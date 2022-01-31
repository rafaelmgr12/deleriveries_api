import express, { request } from "express";

const app = express();

app.get("/",(request, response) => {
    return response.json({ message: "Hello World" });});1
app.listen(3000,()=>console.log("Server started on port 3000"));