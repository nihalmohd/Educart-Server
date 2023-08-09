import { CategoryModel } from "../../../domin/model/Admin/Catogory";
import { CategoryRep } from "../../../infra/repository/AdminCategoryRepo";

export const SubCategoryAdd=(Categoryrepsitory:CategoryRep)=>async(_id:string,Subcategory:string)=>{ 
    const CreateSubCategory=await Categoryrepsitory.AddSubcategory(_id,Subcategory)
    return CreateSubCategory
}