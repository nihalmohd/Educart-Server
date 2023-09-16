import { Request, Response } from "express";
import { addPayments } from "../../../app/usecase/user/CreatePaymentDetails";
import { Payment } from "../../../infra/database/Payment";
import { PaymentIMP } from "../../../infra/repository/Payments";


const paymentDb = Payment
const PaymentReopository = PaymentIMP(paymentDb)

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

export const PaymentDetailsCreated = async(req:CustomRequest,res:Response)=>{  
    try {
        const {CourseId,coursePrice} = req.body
        const User =req.userInfo
        const UserId =User?.id as string
        const createdPayments =  await addPayments(PaymentReopository)(UserId,CourseId,coursePrice)
        if(createdPayments){
            res.status(200).json({message:"Founded successfull",createdPayments})
        }else{
            res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(501).json({message:"ingernal server"}) 
    }
}