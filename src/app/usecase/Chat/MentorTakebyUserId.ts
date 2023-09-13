import { chatRepository } from "../../../infra/repository/Chat"

export const MentorTakeByUserId =(chatRepository:chatRepository)=>(UserId:string)=>{
    console.log(UserId,);
    
   const GorMentorsById =chatRepository.FindUser(UserId)
   if(GorMentorsById){
    return GorMentorsById
   }
}

