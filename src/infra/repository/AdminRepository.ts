import { Admin } from "../../domin/model/Admin/Admin";
import { MongoDBAdmin } from "../database/AdminModel";
import { MongoDBUser } from "../database/userModel";

export type AdminRepositorytype = {
  FindByEmail: (Email: string,Password:string) => Promise<Admin | null>;

};

export const AdminRepositoryIMP = (Adminmodel: MongoDBAdmin): AdminRepositorytype => {
  const FindByEmail = async (Email: string): Promise<Admin | null> => {
    console.log(Email);
    
    const AdminExist = await Adminmodel.findOne({Email:Email});
    console.log(AdminExist?.toObject());
    
    return AdminExist ? AdminExist.toObject() : null;
  };


  return {
    FindByEmail,
  };
};
