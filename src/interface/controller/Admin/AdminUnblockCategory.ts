import { Request, Response } from "express";
import { Category } from "../../../infra/database/Category";
import { CategoryRepoIMP } from "../../../infra/repository/AdminCategoryRepo";
import { BlockCategory, UnblockCategory } from "../../../app/usecase/admin/AdminCategoryMangement";

const categorydb=Category
const Categoryrepository=CategoryRepoIMP(categorydb)


export const AdminUnBlockCategory =async (req:Request,res:Response) =>{
    try {
        const {_id} = req.body
        const UnBlockedCategory =await UnblockCategory(Categoryrepository)(_id)
        if(UnBlockedCategory){
         res.status(200).json({message:"Category UnBlocked Successfull"})
        } else{
            res.status(400) .json({message:"Something went wrong"})
        } 
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}