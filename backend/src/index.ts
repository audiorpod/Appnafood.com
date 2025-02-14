import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
//import MyUserRoute from "./routes/MyUserRoute";

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected to database!"));     // for debugging purpose 

const app = express();
app.use(express.json());
app.use(cors());


app.get("/health", async( req: Request, res: Response )=> {

})
// /api/my/user
app.use("/api/my/user",  myUserRoute);

app.listen(8000, () =>{
    console.log("server started on localhost:8000");
});