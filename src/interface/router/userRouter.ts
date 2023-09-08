import {Request, Response, Router} from "express"
import {register } from "../controller/User/usercontorller";
import { login} from "../controller/User/UserloginController";
import { OTPAuth } from "../controller/User/UserOTPAuth";
import { ForgotOtp } from "../controller/User/forgotEmail";
import { OTPVerification } from "../controller/User/OTPVerification";
import { AdminShowBanner } from "../controller/Admin/AdminShowBanner";
import UserAutherization from "../middlewar/UserAuthVerification";
import { Showcategory } from "../controller/User/userShowCategory";
import { showCourse } from "../controller/User/UserShowCourse";
import { showCourseByid } from "../controller/User/UserShowCourseById";
import { TakeCourseByCategory } from "../controller/User/TakeCourseByCategory";
import { UserTakeProfile } from "../controller/User/UserTakeProfile";
import { UserProfileUpdate } from "../controller/User/UserProfileUpdate";
import { UerCouseListUpdate } from "../controller/User/UerCouseListUpdate";
import { UserTakeCourseIdOnUser } from "../controller/User/UserTakeCourseIdOnUser";

export const userRouter=Router()
 
userRouter.get("/",(req:Request,res:Response)=>{
    console.log("working");
    res.status(200).json({status:"done"})
})
//Post sign Up
userRouter.post("/user/register",register)
userRouter.post("/user/login",login)
userRouter.post("/user/OTP",OTPAuth)
userRouter.post("/user/ForgotPassword",ForgotOtp)
userRouter.post("/user/VerifyOTP",OTPVerification)
// Home get
userRouter.get("/user/GetBanners",UserAutherization,AdminShowBanner)
userRouter.get("/ShowCategory",UserAutherization,Showcategory)
userRouter.get("/showCourse",UserAutherization,showCourse)
userRouter.get('/TakeCouresByCategory',UserAutherization,TakeCourseByCategory)


//profile get 
userRouter.get('/ProfileTakeUser',UserAutherization,UserTakeProfile)

//profile post
userRouter.post('/UpdateProfile',UserAutherization,UserProfileUpdate)

//Course Details get 
userRouter.get("/CourseDeatailsByid",UserAutherization,showCourseByid)

//Course Details post
userRouter.post("/UpdateCouseid",UserAutherization,UerCouseListUpdate)
userRouter.post("/UpdatedCouseIdtake",UserAutherization,UserTakeCourseIdOnUser)


