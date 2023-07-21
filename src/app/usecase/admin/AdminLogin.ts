import { AdminRepositorytype } from "../../../infra/repository/AdminRepository";


export const AdminLogin=(AdminRepository:AdminRepositorytype)=>async(AdminEmail:string,Password:string)=>{

const AdminExist=await AdminRepository.FindByEmail(AdminEmail)
if(AdminExist&&AdminExist.Password===Password)
console.log(AdminExist,"Eisit")
return AdminExist
}