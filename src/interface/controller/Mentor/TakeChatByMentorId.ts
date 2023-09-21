import { Request, Response } from "express";
import { chatModel } from "../../../infra/database/Chat";
import { ChatRepositoryIMP } from "../../../infra/repository/Chat";
import { UserTakeByMentorId } from "../../../app/usecase/Chat/UserTakeByMentorId";

const Chatdb=chatModel
const chatRepsitory = ChatRepositoryIMP(Chatdb)


interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

export const TakeUserByMentorId = async(req:CustomRequest,res:Response)=>{
    try {
        const User =req.userInfo
        const MentorId =User?.id as string
        const FoundedUserChat =  await UserTakeByMentorId(chatRepsitory)(MentorId)
        if(FoundedUserChat){
            res.status(200).json({message:"Founded successfull",FoundedUserChat})
        }else{
            res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(501).json({message:"internal server"}) 
    }
}