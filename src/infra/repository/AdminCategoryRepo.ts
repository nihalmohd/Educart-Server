import { CategoryModel } from "../../domin/model/Admin/Catogory";
import { MongoDbCategory } from "../database/Category";

export type CategoryRep={
    CreateCategory:(CategoryDetail:CategoryModel)=>Promise<CategoryModel>
}

export const CategoryRepoIMP=(CategoryModel:MongoDbCategory):CategoryRep =>{
  const CreateCategory=async (CategoryDetail:CategoryModel):Promise<CategoryModel>=>{
       const CreatedCategory=await CategoryModel.create(CategoryDetail)
       return CreatedCategory
  }

    return{
      CreateCategory
    }
}