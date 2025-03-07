import express, {Request, Response} from "express";

import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
   .connect(process.env.MONGODB_CONNECT_STRING as string)
   .then(()=> console.log("Connected to Database"));


const app=express();
app.use(express.json());
app.use(cors());

app.get("/test",async (req:Request, res:Response)=>{
    res.json({message:"Hello World"});
});

app.listen(7000, ()=>{
    console.log("Server Started on localhost:7000");
})