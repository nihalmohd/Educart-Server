import jwt from "jsonwebtoken"
import mongoose from "mongoose"


export const generateAccessToken=(id:mongoose.Types.ObjectId,role:string)=>{
const expiresIn="30m"
const accessToken=jwt.sign({id,role},process.env.JWT_ACCESS_SECRET as jwt.Secret,{expiresIn}) 
return accessToken
}

// export const generateRefreshToken=(_id:mongoose.Types.ObjectId,role:string)=>{
// const expiresIn="30m"
// const jwtRefreshToken="Refresh-Secret-Key"
// const RefreshToken=jwt.sign({_id,role},jwtRefreshToken,{expiresIn});
// return RefreshToken
// }
export default jwt
