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


export const AdminRouter = Router()

AdminRouter.get("/Admin", (req: Request, res: Response) => {
    console.log("working")
    return res.status(200).json({ status: "done" })
})

// post methods

AdminRouter.post("/Login", Adminlogin);
AdminRouter.post("/getUsers", DisplayUsers)
AdminRouter.post("/blockUser", BlockUserReq)
AdminRouter.post("/UnblockUser", UnBlockUserReq)
AdminRouter.post("/getMentors", DisplayMentors)
AdminRouter.post("/blockMentor", BlockMentorReq)
AdminRouter.post("/UnblockMentor", UnBlockMentorReq)
AdminRouter.post("/BannerUpload", AdminCreateBanner)
AdminRouter.post("/AdminShowBanner",AdminShowBanner)
AdminRouter.post('/AdminHideBanner',AdminHideBanner) 