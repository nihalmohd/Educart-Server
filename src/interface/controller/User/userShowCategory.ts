import { Request, Response } from "express"
import { Category } from "../../../infra/database/Category"
import { CategoryRepoIMP } from "../../../infra/repository/AdminCategoryRepo"
import { DisplayCategoryes } from "../../../app/usecase/admin/AdminShowCategory"

const categorydb=Category
const Categoryrepository=CategoryRepoIMP(categorydb)


export const Showcategory = async(req:Request,res:Response) => {
    try {
        const FoundedCategroy=await DisplayCategoryes(Categoryrepository)
        if(FoundedCategroy){
            res.status(200).json({message:"Category founded completely",FoundedCategroy})
        }else{
            res.status(400).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
        
    }

}
