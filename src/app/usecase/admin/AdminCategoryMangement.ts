import { CategoryRep } from "../../../infra/repository/AdminCategoryRepo"


export const BlockCategory=(Categoryrepsitory:CategoryRep)=>async(_id:string)=>{
    const falseUpdated =await Categoryrepsitory.UpdateStatusFalse(_id)
    return falseUpdated
}
export const UnblockCategory=(Categoryrepsitory:CategoryRep)=>async(_id:string)=>{
    const tureUpdated =await Categoryrepsitory.UpdateStatusTrue(_id)
    return tureUpdated
}