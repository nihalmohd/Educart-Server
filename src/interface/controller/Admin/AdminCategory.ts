import { Request, Response } from "express";
import { Category } from "../../../infra/database/Category";
import { CategoryRepoIMP } from "../../../infra/repository/AdminCategoryRepo";
import { CategoryAdd } from "../../../app/usecase/admin/AdminCategory";

const categorydb=Category
const Categoryrepository=CategoryRepoIMP(categorydb)

export const Addcategory = async (req:Request,res:Response)=>{
    const {Category,SubCategory} = req.body
    try {
        const CreatedCategory=await CategoryAdd(Categoryrepository)(Category,SubCategory)
        if(CreatedCategory){
            res.status(200).json({message:"Category Created successfull",CreatedCategory})
        }else{
            res.status(401).json({message:"Something went wrong"})
        }
    } catch (error) {
       res.status(500).json({message:"Internal server Error"}) 
    }

}        