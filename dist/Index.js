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
// export interface User {
//     _id:string
//     Username:string;
//     Email: string;
//     Password: string;
//     Status?:string
//     courses ?: [{courseId:string,paymentStatus:true}],
//     ProfileImage?:string
//   }
const origins = ['http://localhost:3000', 'https://educart-client-react-fra4nss5u-educart2003-gmailcom.vercel.app', 'https://educart-mu.vercel.app'];
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    const allowedOrigins = origins;
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
// const httpServer = http.createServer(app);
// import { Server, Socket } from 'socket.io'
// const io = new Server(httpServer, {
//   cors: {
//     origin:['http://localhost:3000', 'https://educart-client-react-fra4nss5u-educart2003-gmailcom.vercel.app', 'https://educart-mu.vercel.app'],
//   },
// });
app.use("/", userRouter_1.userRouter);
app.use("/Admin", AdminRouter_1.AdminRouter);
app.use("/Mentor", MentorRouts_1.MentorRouter);
const server = app.listen(PORT, () => {
    console.log(`sever is running oin port ${PORT}`);
});
const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: origins,
    },
});
io.on('connection', (socket) => {
    // console.log('A user connected', socket.id);
    console.log('Connected to socket.io');
    socket.on("setup", (userId) => {
        socket.join(userId);
        ``;
        //  console.log("usr joined room",userId);
        socket.emit("connected");
    });
    socket.on('message', (UserId) => {
        console.log('okkkkkk');
        console.log('Message:', UserId);
        socket.join(UserId);
        socket.emit("connected");
    });
    socket.on('join chat', (room) => {
        socket.join(room);
        console.log("User Joined room : " + room);
    });
    socket.on('new message', (newMessageReceived) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        console.log('newMessagereceived', newMessageReceived);
        let chat = newMessageReceived.chat;
        console.log('new message=', newMessageReceived);
        const sender = newMessageReceived.User ? newMessageReceived.User : newMessageReceived === null || newMessageReceived === void 0 ? void 0 : newMessageReceived.Mentor;
        console.log('sender is', sender);
        console.log('newMessageReceived.chat.user=', (_a = newMessageReceived.chat) === null || _a === void 0 ? void 0 : _a.User);
        //    if(!chat.student && !chat.tutor) return console.log("Chat.users not defiend");
        if ((sender === null || sender === void 0 ? void 0 : sender._id) === ((_c = (_b = newMessageReceived.chat) === null || _b === void 0 ? void 0 : _b.User) === null || _c === void 0 ? void 0 : _c._id)) {
            console.log('student is the sender');
            socket.in((_d = chat === null || chat === void 0 ? void 0 : chat.Mentor) === null || _d === void 0 ? void 0 : _d._id).emit('message recieved', newMessageReceived);
        }
        if ((sender === null || sender === void 0 ? void 0 : sender._id) === ((_f = (_e = newMessageReceived.chat) === null || _e === void 0 ? void 0 : _e.Mentor) === null || _f === void 0 ? void 0 : _f._id)) {
            console.log('tutor is the sender');
            socket.in((_g = chat === null || chat === void 0 ? void 0 : chat.User) === null || _g === void 0 ? void 0 : _g._id).emit('message recieved', newMessageReceived);
        }
        //    chat.student.forEach((user)=>{
        //        if(user._id === newMessageRecieved.sender._id) return
        //        socket.in(user._id).emit('message recieved',newMessageRecieved) 
        if ((chat === null || chat === void 0 ? void 0 : chat._id) === ((_h = newMessageReceived === null || newMessageReceived === void 0 ? void 0 : newMessageReceived.User) === null || _h === void 0 ? void 0 : _h._id))
            return console.log('It\'s not a dump');
        socket.in((_j = chat === null || chat === void 0 ? void 0 : chat.User) === null || _j === void 0 ? void 0 : _j._id).emit('message received', newMessageReceived);
        if ((chat === null || chat === void 0 ? void 0 : chat._id) === ((_k = newMessageReceived === null || newMessageReceived === void 0 ? void 0 : newMessageReceived.Mentor) === null || _k === void 0 ? void 0 : _k._id))
            return console.log('It\'s a dump');
        socket.in((_l = chat === null || chat === void 0 ? void 0 : chat.Mentor) === null || _l === void 0 ? void 0 : _l._id).emit('message received', newMessageReceived);
        // if (newMessageReceived.student?._id === chat._id || newMessageReceived.tutor?._id === chat._id) {
        //     // Emit the event to the corresponding chat._id
        //     socket.in(chat._id).emit('message received', newMessageReceived);
        //   }  
    });
    socket.on('disconnect', () => {
        console.log('A user disconnected', socket.id);
    });
});
