import { ObjectId } from "mongoose";

export interface User {
    Username:string;
    Email: string;
    Password: string;
    Status?:string
    courses ?: [{courseId:string,paymentStatus:boolean}],
  }
  export interface OTPUser{
    Email:string;
    OTP:string;
  }