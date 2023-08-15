import { NextFunction, Request, Response } from "express";
import jwt from "../../Utils/JwtAuthetication";
import { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

const MentorAutherization = (req:CustomRequest,res:Response,next:NextFunction)=>{
    try {
        if(req.headers.authorization && req.headers.authorization.startsWith("MentorBearer")){
            let token =req.headers.authorization.split(" ")[1]
            const {id,role}=jwt.verify(token,process.env.JWT_ACCESS_SECRET as jwt.Secret)as JwtPayload
            req.userInfo = { id, role };
            next()
        }else{ 
            res.status(401).json({message:"No Access Token Founded"})
        }
    } catch (error) {
       res.status(403).json({message:"Access forbidden ,Invalid token "}) 
    }
}
export default MentorAutherization  