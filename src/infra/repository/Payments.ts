import { payment } from "../../domin/model/payment.ts/payment";
import { MongoDbPayment } from "../database/Payment";

export type paymentRepository ={
    create:(_id:string,courseId:string,coursePrice:number)=>Promise<payment> 
    FindAllpaymnents():Promise<payment[]>
    } 




export const PaymentIMP = (PaymentModel:MongoDbPayment):paymentRepository =>{
    const create = async (_id:string,courseId:string,coursePrice:number):Promise <payment>=>{
      const CreatedPayment = await PaymentModel.create({_id:_id,courseId:courseId,coursePrice:coursePrice})
        return CreatedPayment
    }
    const FindAllpaymnents = async():Promise<payment[]>=>{
        const FoundedPayments = await PaymentModel.find()
        return FoundedPayments
    }
  return{
    create,
    FindAllpaymnents
  }  
}