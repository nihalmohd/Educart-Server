import { CategoryModel } from "../../../domin/model/Admin/Catogory";
import { CategoryRep } from "../../../infra/repository/AdminCategoryRepo";

export const CategoryAdd=(Categoryrepsitory:CategoryRep)=>async(Catogory:string,Subcategory:string[])=>{
    const CategoryDetails:CategoryModel={
        Catogory,
        Subcategory
    }
    const CreateCategory=await Categoryrepsitory.CreateCategory(CategoryDetails)
    return CreateCategory
}