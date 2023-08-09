import { CategoryModel } from "../../../domin/model/Admin/Catogory";
import { CategoryRep } from "../../../infra/repository/AdminCategoryRepo";

export const CategoryAdd=(Categoryrepsitory:CategoryRep)=>async(Category:string,Subcategory:string[])=>{
    const CategoryDetails:CategoryModel={
        Category,
        Subcategory
    }
    const CreateCategory=await Categoryrepsitory.CreateCategory(CategoryDetails)
    return CreateCategory
}