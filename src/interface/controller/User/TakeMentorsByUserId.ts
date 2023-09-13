import { Request, Response } from "express";
import { chatModel } from "../../../infra/database/Chat";
import { ChatRepositoryIMP } from "../../../infra/repository/Chat";
import { FindChats } from "../../../app/usecase/Chat/FindChat";
import { AddChats } from "../../../app/usecase/Chat/AddChat";
import { MentorTakeByUserId } from "../../../app/usecase/Chat/MentorTakebyUserId";

const Chatdb=chatModel
const chatRepsitory = ChatRepositoryIMP(Chatdb)


interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

export const TakeMentors = async(req:CustomRequest,res:Response)=>{
    try {
        const User =req.userInfo
        const UserId =User?.id as string
        const FoundedUserChat =  await MentorTakeByUserId(chatRepsitory) (UserId) 
        if(FoundedUserChat){
            res.status(200).json({message:"Founded successfull",FoundedUserChat})
        }else{
            res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(501).json({message:"ingernal server"}) 
    }
}