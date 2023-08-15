import { CategoryModel, UpdateCategoryResult } from "../../domin/model/Admin/Catogory";
import { MongoDbCategory } from "../database/Category";
import { ObjectId } from "mongodb";

export type CategoryRep={
    CreateCategory:(CategoryDetail:CategoryModel)=>Promise<CategoryModel>
    findCategory():Promise<CategoryModel[]>
    UpdateStatusFalse:(_id:string)=>Promise<CategoryModel | void | UpdateCategoryResult>
    UpdateStatusTrue:(_id:string) => Promise<CategoryModel |void | UpdateCategoryResult>
    AddSubcategory(_id:string,Subcategory:string):Promise<CategoryModel | void | UpdateCategoryResult>
    TakeSubcategory:(_id:string) =>Promise<CategoryModel[]>
}

export const CategoryRepoIMP=(CategoryModel:MongoDbCategory):CategoryRep =>{
  const CreateCategory=async (CategoryDetail:CategoryModel):Promise<CategoryModel>=>{
       const CreatedCategory=await CategoryModel.create(CategoryDetail)
       return CreatedCategory
  }
  const findCategory = async ():Promise<CategoryModel[]>=>{
    const FoundedCategories=await CategoryModel.find()
    return FoundedCategories
  }
  const UpdateStatusFalse = async (_id:string) :Promise<CategoryModel | void | UpdateCategoryResult>  => {
     const BlockedCategory = await CategoryModel.updateOne({_id:new ObjectId(_id)},{$set:{Status:false}})
   return BlockedCategory  
  }
  const UpdateStatusTrue = async (_id:string) :Promise<CategoryModel | void | UpdateCategoryResult>  => {
    const BlockedCategory = await CategoryModel.updateOne({_id:new ObjectId(_id)},{$set:{Status:true}})
  return BlockedCategory  
 }
 const AddSubcategory =async (_id:string,Subcategory:string):Promise<CategoryModel | void | UpdateCategoryResult>=>{
  const AddedSubcategory=await CategoryModel.updateOne({_id:new ObjectId(_id)},{$push:{Subcategory:Subcategory}})
  return AddedSubcategory
 }
 const TakeSubcategory = async (_id:string) :Promise<CategoryModel[]>=>{
const TookSubcategory =await CategoryModel.find({_id: new ObjectId(_id)})
return TookSubcategory
 }
  

    return{
      CreateCategory,
      findCategory,
      UpdateStatusFalse,
      UpdateStatusTrue,
      AddSubcategory,
      TakeSubcategory
    }
}