import { CategoryRep } from "../../../infra/repository/AdminCategoryRepo"

export const DisplayCategoryes=(CategoryRep:CategoryRep)=>{
    const displayCategoryGot=CategoryRep.findCategory()
    return displayCategoryGot
}