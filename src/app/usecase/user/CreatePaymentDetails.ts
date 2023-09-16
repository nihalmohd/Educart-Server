import { paymentRepository } from "../../../infra/repository/Payments";

export const  addPayments=(paymentRepo:paymentRepository)=>async(_id:string,courseId:string,coursePrice:number)=>{
    console.log(_id,courseId,coursePrice,"usecase");
    
const FoundedCreatedPayment=await paymentRepo.create(_id,courseId,coursePrice)
console.log(FoundedCreatedPayment,"usercase is ok");

return FoundedCreatedPayment;
}