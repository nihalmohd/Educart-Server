import { Request, Response } from "express"
import { DisplayCategoryes } from "../../../app/usecase/admin/AdminShowCategory"
import { Category } from "../../../infra/database/Category"
import { CategoryRepoIMP } from "../../../infra/repository/AdminCategoryRepo"
import { MentorTakeSubCategory } from "../../../app/usecase/Mentor/MentorTakeSubcategory"
import { stringify } from "querystring"

const categorydb=Category
const Categoryrepository=CategoryRepoIMP(categorydb)

export const MenotorTakeSubCategory = async(req:Request,res:Response) => {
    const _id = req.query._id as string
    try {
        const FoundedSubCategroy=await MentorTakeSubCategory(Categoryrepository)(_id)
        if(FoundedSubCategroy){
            res.status(200).json({message:"SubCategory founded completely",FoundedSubCategroy})
        }else{
            res.status(400).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
        
    }

}