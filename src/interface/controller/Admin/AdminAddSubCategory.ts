import { Request, Response } from "express"
import { Category } from "../../../infra/database/Category"
import { CategoryRepoIMP } from "../../../infra/repository/AdminCategoryRepo"
import { SubCategoryAdd } from "../../../app/usecase/admin/AdminAddSubcategory"



const categorydb=Category
const Categoryrepository=CategoryRepoIMP(categorydb)

export const AdminAddSubcategory =async (req:Request,res:Response)=>{
    try {
        const {_id,Subcategory}=req.body   
        const CreatedSubcategory=await SubCategoryAdd(Categoryrepository)(_id,Subcategory)
        if(CreatedSubcategory){
            res.status(200).json({message:"Subcategory Added Successfull"})
        }else{
            res.status(400).json({message:"something Went Wrong"})
        }
    } catch (error) {
       res.status(500).json({message:"Internal Server Error"}) 
    }
}