import { Request, Response } from "express";
import { addPayments } from "../../../app/usecase/user/CreatePaymentDetails";
import { Payment } from "../../../infra/database/Payment";
import { PaymentIMP } from "../../../infra/repository/Payments";
import { FindPayment } from "../../../app/usecase/admin/FindPayment";


const paymentDb = Payment
const PaymentReopository = PaymentIMP(paymentDb)

export const AdminGetPauments = async(req:Request,res:Response)=>{
    try {
        const FoundedPaymentDetails = await FindPayment(PaymentReopository)
        if(FoundedPaymentDetails){
            res.status(200).json({message:"Founded Successfully",FoundedPaymentDetails})
        }else{
            res.status(401).json({message:"something went worng "})
        }    
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}