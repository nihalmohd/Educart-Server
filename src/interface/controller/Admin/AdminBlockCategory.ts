import { Request, Response } from "express";
import { Category } from "../../../infra/database/Category";
import { CategoryRepoIMP } from "../../../infra/repository/AdminCategoryRepo";
import { BlockCategory } from "../../../app/usecase/admin/AdminCategoryMangement";


const categorydb=Category
const Categoryrepository=CategoryRepoIMP(categorydb)


export const AdminBlockCategory =async (req:Request,res:Response) =>{
    try {
        const {_id} = req.body
        const BlockedCategory =await BlockCategory(Categoryrepository)(_id)
        if(BlockedCategory){
         res.status(200).json({message:"Category Blocked Successfull"})
        } else{
            res.status(400) .json({message:"Something went wrong"})
        } 
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}