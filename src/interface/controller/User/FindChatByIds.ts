import { Request, Response } from "express";
import { chatModel } from "../../../infra/database/Chat";
import { ChatRepositoryIMP } from "../../../infra/repository/Chat";
import { AddChats } from "../../../app/usecase/Chat/AddChat";
import { FindChatsByIds } from "../../../app/usecase/Chat/FindChatByIds";

const Chatdb=chatModel
const chatRepsitory = ChatRepositoryIMP(Chatdb)

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }


export const FidingChat = async (req:CustomRequest,res:Response) =>{
    try {
        const User = req.userInfo
        const UserId =User?.id as string
        const {MentorId} = req.body
        console.log(MentorId,"mentor Id");
        const FoundedChat = await FindChatsByIds(chatRepsitory)(UserId,MentorId)
        if(FoundedChat){
            res.status(200).json({message:"Founded Successfull",FoundedChat})
        }else{
            res.status(401).json({message:"something went wrong "})
        }
        
    } catch (error) {
        res.status(501).json({message:"Internal server Error"})
    }
}

