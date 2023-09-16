import express from "express"
import cors from "cors" 
import {Database} from "./src/infra/database/config"
import {userRouter} from "./src/interface/router/userRouter"
import { AdminRouter } from "./src/interface/router/AdminRouter"
import { MentorRouter } from "./src/interface/router/MentorRouts"
const dotenv = require("dotenv");
dotenv.config();



const app=express();
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    const allowedOrigins = ['http://localhost:3000', 'https://educart-client-react-fra4nss5u-educart2003-gmailcom.vercel.app', 'https://educart-mu.vercel.app'];
    const origin = req.headers.origin as string;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
    });
const PORT=process.env.PORT||5000;

Database()

app.use(express.json());
// app.use(cors({
//     origin: 'https://educart-client-react-fra4nss5u-educart2003-gmailcom.vercel.app',
//     methods: ["GET", "POST"],
//   }));




app.use("/",userRouter)
app.use("/Admin",AdminRouter)
app.use("/Mentor",MentorRouter)

app.listen(PORT,()=>{
    console.log(`sever is running oin port ${PORT}`)
})
