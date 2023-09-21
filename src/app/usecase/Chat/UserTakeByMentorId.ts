import { chatRepository } from "../../../infra/repository/Chat"

export const UserTakeByMentorId =(chatRepository:chatRepository)=>(MentorId:string)=>{
    console.log(MentorId,);
    
   const GorMentorsById =chatRepository.FindMentor(MentorId)
   if(GorMentorsById){
    return GorMentorsById
   }
}

