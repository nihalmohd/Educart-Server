import mongoose, { Schema,Model,Document } from "mongoose";
import { payment } from "../../domin/model/payment.ts/payment";


export type MongoDbPayment = Model<Document<any, any, any> & payment>;

const PaymentSchema=new Schema({
    UserId:{
        type: mongoose.Types.ObjectId,
        required:true
    },
    courseId:{
        type: mongoose.Types.ObjectId,
        require:true
    },
    coursePrice:{
        type:Number,
        required:true
    }

})
export const Payment:MongoDbPayment=mongoose.connection.model<Document<any, any, any> & payment>("Payment",PaymentSchema)