import express from "express"
import mongoose from "mongoose";
import {Database} from "./src/infra/database/config"
import {userRouter} from "./src/interface/router/userRouter"
import { AdminRouter } from "./src/interface/router/AdminRouter";


const app=express();
const PORT=process.env.PORT||5000;

Database()

app.use(express.json());

app.use("/",userRouter)
app.use("/Admin",AdminRouter)

app.listen(PORT,()=>{
    console.log(`sever is running oin port ${PORT}`)
})
