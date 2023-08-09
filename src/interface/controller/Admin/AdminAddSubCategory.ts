import { Request, Response } from "express"
import { Category } from "../../../infra/database/Category"
import { CategoryRepoIMP } from "../../../infra/repository/AdminCategoryRepo"



const categorydb=Category
const Categoryrepository=CategoryRepoIMP(categorydb)

export const AdminAddSubcategory =(req:Request,res:Response)=>{
    
}