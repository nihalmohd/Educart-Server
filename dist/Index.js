"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./src/infra/database/config");
const userRouter_1 = require("./src/interface/router/userRouter");
const AdminRouter_1 = require("./src/interface/router/AdminRouter");
const MentorRouts_1 = require("./src/interface/router/MentorRouts");
const dotenv = require("dotenv");
dotenv.config();
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    const allowedOrigins = ['http://localhost:3000', 'https://educart-client-react-fra4nss5u-educart2003-gmailcom.vercel.app', 'https://educart-mu.vercel.app'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});
const PORT = process.env.PORT || 5000;
(0, config_1.Database)();
app.use(express_1.default.json());
// app.use(cors({
//     origin: 'https://educart-client-react-fra4nss5u-educart2003-gmailcom.vercel.app',
//     methods: ["GET", "POST"],
//   }));
app.use("/", userRouter_1.userRouter);
app.use("/Admin", AdminRouter_1.AdminRouter);
app.use("/Mentor", MentorRouts_1.MentorRouter);
app.listen(PORT, () => {
    console.log(`sever is running oin port ${PORT}`);
});
