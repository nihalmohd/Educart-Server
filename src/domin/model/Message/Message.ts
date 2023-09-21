import mongoose from "mongoose";
// import { User } from "../User/User";
// import { Mentor } from "../Mentor/Mentor";
export interface Mentor {
  _id:string
  Username:string;
  Email: string;
  Password: string;
}

export interface User {
  _id:string
  Username:string;
  Email: string;
  Password: string;
  Status?:string
  courses ?: [{courseId:string,paymentStatus:true}],
  ProfileImage?:string
}

export interface Chat {
  chatName: string;
  User?: mongoose.Types.ObjectId;
  Mentor?: mongoose.Types.ObjectId;
  latestMessage?: mongoose.Types.ObjectId;
}

export interface message {
  User?: mongoose.Types.ObjectId;
  Mentor?: mongoose.Types.ObjectId;
  content: string;
  chat: mongoose.Types.ObjectId;
}

export interface newMessageReceived {
  _id: string;
  User?: User;
  Mentor?: Mentor;
  content: string;
  chat: ChatInMessage;
}

export interface ChatInMessage {
  _id: string;
  Mentor: Mentor;
  User: User;
}