
import mongoose from "mongoose";

export const Database=()=>{
    mongoose.connect(process.env.MONGO_URL as string).then(()=>{
        console.log("Database connected successfully")
    }).catch((error)=>{
        console.log(error.message)
    })
}