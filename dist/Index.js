"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./src/infra/database/config");
const userRouter_1 = require("./src/interface/router/userRouter");
const AdminRouter_1 = require("./src/interface/router/AdminRouter");
const MentorRouts_1 = require("./src/interface/router/MentorRouts");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(0, config_1.Database)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST"]
}));
app.use("/", userRouter_1.userRouter);
app.use("/Admin", AdminRouter_1.AdminRouter);
app.use("/Mentor", MentorRouts_1.MentorRouter);
app.listen(PORT, () => {
    console.log(`sever is running oin port ${PORT}`);
});