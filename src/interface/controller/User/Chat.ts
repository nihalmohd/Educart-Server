import { Request, Response } from "express";
import { chatModel } from "../../../infra/database/Chat";
import { ChatRepositoryIMP } from "../../../infra/repository/Chat";
import { FindChats } from "../../../app/usecase/Chat/FindChat";
import { AddChats } from "../../../app/usecase/Chat/AddChat";

const Chatdb=chatModel
const chatRepsitory = ChatRepositoryIMP(Chatdb)


interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

export const AddChat = async(req:CustomRequest,res:Response)=>{
    const user = req.userInfo
    const UserId =user?.id as string
    const MentorId =req.body.MentorId
    console.log(MentorId,UserId," Kitnnunnndo");
    
  try {
    const ChatExist =await FindChats(chatRepsitory)
    console.log(ChatExist,"ano yenn check");
    if(ChatExist.length<=0){   
        console.log("nothing");
            const ChatExist = await AddChats(chatRepsitory)(UserId,MentorId)
            if(ChatExist){
                res.status(200).json({message:"Added sucssfull",ChatExist})
            }else{
                res.status(401).json({message:"something went wrong"})
            }
        }else{
            res.status(200).json({message:"already Exist",ChatExist})
        }
  } catch (error) {
    res.status(501).json({message:"internal server error"})
  }

}