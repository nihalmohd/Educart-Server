import { Request, Response, Router } from "express";
import { Adminlogin } from "../controller/Admin/AdminLogin"
import { DisplayUsers } from "../controller/Admin/Display-Users";
import { BlockUserReq } from "../controller/Admin/AdminBlockUser";
import { UnBlockUserReq } from "../controller/Admin/AdminUnblockUser";
import { BlockMentorReq } from "../controller/Admin/AdminBlockMentor";
import { UnBlockMentorReq } from "../controller/Admin/AminUnblockMentor";
import { DisplayMentors } from "../controller/Admin/Display-Mentors";
import { AdminCreateBanner } from "../controller/Admin/AdminAddbanner";
import { AdminShowBanner } from "../controller/Admin/AdminShowBanner";
import { AdminHideBanner } from "../controller/Admin/AdminHideBanner";
import { AdminVisibleBanner } from "../controller/Admin/VisibleBanner";
import { Addcategory } from "../controller/Admin/AdminCategory";
import { ShowCategory } from "../controller/Admin/AdminShowCategory";
import { AdminBlockCategory } from "../controller/Admin/AdminBlockCategory";
import { AdminUnBlockCategory } from "../controller/Admin/AdminUnblockCategory";
import { AdminAddSubcategory } from "../controller/Admin/AdminAddSubCategory";
import AdminAutherization from "../middlewar/AdminAuthVerification";
import { AdminDisplayCourse } from "../controller/Admin/AdminDisplayCourse";
import { AdminBlaockCourse, AdminUnblaockCourse } from "../controller/Admin/AdminCourseManagment";


export const AdminRouter = Router()

AdminRouter.get("/Admin", (req: Request, res: Response) => {
    console.log("working")
    return res.status(200).json({ status: "done" })
})

// post methods

// AdminRouter.post("/Login", Adminlogin);
// AdminRouter.post("/getUsers", AdminAutherization,DisplayUsers)
// AdminRouter.post("/blockUser",AdminAutherization, BlockUserReq)
// AdminRouter.post("/UnblockUser",AdminAutherization, UnBlockUserReq)
// AdminRouter.post("/getMentors",AdminAutherization, DisplayMentors)
// AdminRouter.post("/blockMentor",AdminAutherization, BlockMentorReq)
// AdminRouter.post("/UnblockMentor",AdminAutherization, UnBlockMentorReq)
// AdminRouter.post("/BannerUpload",AdminAutherization, AdminCreateBanner)
// AdminRouter.post("/AdminShowBanner",AdminAutherization,AdminShowBanner)
// AdminRouter.post("/AdminHideBanner",AdminAutherization,AdminHideBanner) 
// AdminRouter.post("/AdminVisibleBanner",AdminAutherization,AdminVisibleBanner) 
// AdminRouter.post("/AdminCategory",AdminAutherization,Addcategory)
// AdminRouter.post("/AdminDisplayCategory",AdminAutherization,ShowCategory)
// AdminRouter.post("/AdminBlockCategory" ,AdminAutherization,AdminBlockCategory)
// AdminRouter.post("/AdminUnBlockCategory" ,AdminAutherization,AdminUnBlockCategory)
// AdminRouter.post("/AdminAddSubcategory",AdminAutherization,AdminAddSubcategory)
// AdminRouter.get("/AdminDisplayCourse",AdminAutherization,AdminDisplayCourse)
// AdminRouter.post("/AdminCourseVisible",AdminAutherization,AdminBlaockCourse)
// AdminRouter.post("/AdminCourseInvisible",AdminAutherization,AdminUnblaockCourse)


