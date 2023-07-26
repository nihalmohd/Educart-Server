import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import {Database} from "./src/infra/database/config"
import {userRouter} from "./src/interface/router/userRouter"
import { AdminRouter } from "./src/interface/router/AdminRouter";
import { MentorRouter } from "./src/interface/router/MentorRouts";



const app=express();
const PORT=process.env.PORT||5000;

Database()

app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173'],
    methods:["GET","POST"]
   
}))

app.use("/",userRouter)
app.use("/Admin",AdminRouter)
app.use("/Mentor",MentorRouter)

app.listen(PORT,()=>{
    console.log(`sever is running oin port ${PORT}`)
})
