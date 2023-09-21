import { Request, Response } from "express";
import { chatModel } from "../../../infra/database/Chat";
import { ChatRepositoryIMP } from "../../../infra/repository/Chat";
import { AddChats } from "../../../app/usecase/Chat/AddChat";
// import { FindChatsByIds } from "../../../app/usecase/Chat/FindChatByIds";

const Chatdb=chatModel
const chatRepsitory = ChatRepositoryIMP(Chatdb)


interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

export const AddChat = async(req:CustomRequest,res:Response)=>{
  try {
    const user = req.userInfo
    const UserId =user?.id as string
    const MentorId =req.body.MentorId
    console.log(MentorId,UserId," Kitnnunnndo");
    const FoundedChats = await AddChats(chatRepsitory)(UserId,MentorId)
    if(FoundedChats){
      res.status(200).json({message:"Course Added Successfully",FoundedChats})
    }else{
      res.status(401).json({message:"something went wrong"})
    }
  } catch (error) {
    res.status(501).json({message:"internal server error"})
  }

}