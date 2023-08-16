import { CategoryRep } from "../../../infra/repository/AdminCategoryRepo"

export const MentorTakeSubCategory=(CategoryRep:CategoryRep)=>async(Category:string)=>{
    console.log(Category,"id kittiyooooo");
    
    const displaySubCategoryGot=CategoryRep.TakeSubcategory(Category)
    return displaySubCategoryGot
}