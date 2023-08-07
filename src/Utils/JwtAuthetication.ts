import jwt from "jsonwebtoken"
import mongoose from "mongoose"


export const generateAccessToken=(id:mongoose.Types.ObjectId,role:string)=>{
const expiresIn="5m"
const jwtAccessSecret="Access-secret-key"
const accessToken=jwt.sign({id,role},jwtAccessSecret ,{expiresIn}) 
return accessToken
}

// export const generateRefreshToken=(_id:mongoose.Types.ObjectId,role:string)=>{
// const expiresIn="30m"
// const jwtRefreshToken="Refresh-Secret-Key"
// const RefreshToken=jwt.sign({_id,role},jwtRefreshToken,{expiresIn});
// return RefreshToken
// }