import { paymentRepository } from "../../../infra/repository/Payments";

export const  FindPayment= async(paymentRepo:paymentRepository)=>{
    console.log("usecase");  
const FoundedPayment=await paymentRepo.FindAllpaymnents()
console.log(FoundedPayment,"usercase is ok");

return FoundedPayment;
}