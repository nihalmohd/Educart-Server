import { CategoryRep } from "../../../infra/repository/AdminCategoryRepo"

export const MentorTakeSubCategory=(CategoryRep:CategoryRep)=>async(_id:string)=>{
    const displaySubCategoryGot=CategoryRep.TakeSubcategory(_id)
    return displaySubCategoryGot
}