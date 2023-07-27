import { AdminRepositorytype } from "../../../infra/repository/AdminRepository";


export const AdminLogin=(AdminRepository:AdminRepositorytype)=>async(AdminEmail:string,Password:string)=>{

const AdminExist=await AdminRepository.FindByEmail(AdminEmail,Password)
if(AdminExist&&AdminExist.Password===Password){
    return AdminExist
}else{
    return null
}
}