import express from "express"
import cors from "cors" 
import {Database} from "./src/infra/database/config"
import {userRouter} from "./src/interface/router/userRouter"
import { AdminRouter } from "./src/interface/router/AdminRouter"
import { MentorRouter } from "./src/interface/router/MentorRouts"
import http from 'http'
import {newMessageReceived} from "./src/domin/model/Message/Message"
import { Socket } from "socket.io"
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

const app=express();
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    const allowedOrigins = origins;
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


// const httpServer = http.createServer(app);
// import { Server, Socket } from 'socket.io'
// const io = new Server(httpServer, {
//   cors: {
//     origin:['http://localhost:3000', 'https://educart-client-react-fra4nss5u-educart2003-gmailcom.vercel.app', 'https://educart-mu.vercel.app'],
//   },
// });


  

app.use("/",userRouter)
app.use("/Admin",AdminRouter)
app.use("/Mentor",MentorRouter)

const server = app.listen(PORT,()=>{
    console.log(`sever is running oin port ${PORT}`)
})
const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: origins,
    },
  });

io.on('connection', (socket:Socket) => {
    // console.log('A user connected', socket.id);
    console.log('Connected to socket.io');
    socket.on("setup", (userId:string) => {
        socket.join(userId);``
       //  console.log("usr joined room",userId);
        socket.emit("connected");
       })
    
  
    socket.on('message', (UserId:any) => {
        console.log('okkkkkk');
        
      console.log('Message:', UserId);
      socket.join(UserId)
      socket.emit("connected");
    });

    socket.on('join chat',(room:string)=>{
        socket.join(room)
        console.log("User Joined room : " + room);  
    })

    socket.on('new message',(newMessageReceived:newMessageReceived)=>{
        console.log('newMessagereceived',newMessageReceived);
        
       let chat = newMessageReceived.chat
       console.log('new message=',newMessageReceived);
       const sender=newMessageReceived.User ? newMessageReceived.User : newMessageReceived?.Mentor
       console.log('sender is',sender);
       console.log('newMessageReceived.chat.user=',newMessageReceived.chat?.User);
       
    //    if(!chat.student && !chat.tutor) return console.log("Chat.users not defiend");
    if(sender?._id===newMessageReceived.chat?.User?._id){
        console.log('student is the sender'); 
        socket.in(chat?.Mentor?._id).emit('message recieved',newMessageReceived)
    }
    if(sender?._id===newMessageReceived.chat?.Mentor?._id){
        console.log('tutor is the sender');
        socket.in(chat?.User?._id).emit('message recieved',newMessageReceived)
    }
    //    chat.student.forEach((user)=>{
    //        if(user._id === newMessageRecieved.sender._id) return
    //        socket.in(user._id).emit('message recieved',newMessageRecieved) 
        
    
       if(chat?._id === newMessageReceived?.User?._id) return console.log('It\'s not a dump'); 
       socket.in(chat?.User?._id).emit('message received',newMessageReceived);

       if(chat?._id === newMessageReceived?.Mentor?._id)return console.log('It\'s a dump') ;
       socket.in(chat?.Mentor?._id).emit('message received',newMessageReceived);
    
    

    // if (newMessageReceived.student?._id === chat._id || newMessageReceived.tutor?._id === chat._id) {
    //     // Emit the event to the corresponding chat._id
    //     socket.in(chat._id).emit('message received', newMessageReceived);
    //   }  
    })
    socket.on('disconnect', () => {
      console.log('A user disconnected', socket.id);
    });
})

