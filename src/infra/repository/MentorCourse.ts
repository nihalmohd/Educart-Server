import { UpdateWriteOpResult } from "mongoose";
import { Course, UpdateCourseResult } from "../../domin/model/Mentor/CourseModel";
import { MongoDbCourse } from "../database/CourseModel";
import { ObjectId,} from "mongodb";
import { Category } from "../database/Category";


export type CourseRepository={
CreateCourse:(CourseDetails:Course)=>Promise<Course>
FindCourseById:(_id:string) =>Promise<void | CourseRepository | UpdateCourseResult>
FindCourse():Promise<Course[]>
BlockCourseByid:(_id:string)=>Promise<void | CourseRepository | UpdateCourseResult |UpdateWriteOpResult>
UnblacockCourseByid:(_id:string)=>Promise<void | CourseRepository | UpdateCourseResult |UpdateWriteOpResult>
CourseBycateogry:(Category:string)=>Promise <void | Course[] | UpdateCourseResult>
CourseBySubcateogry:(SubCategory:string)=>Promise <void | Course[] | UpdateCourseResult>
MentorTakeCourseByName:(Mentorname:string) =>Promise<void | Course[] | UpdateCourseResult>
MentorAddClasses:(_id:string,Classdatas:object)=>Promise<void | CourseRepository | UpdateCourseResult|UpdateWriteOpResult>
}

export const MentorCourseIMP = (CourseRepository:MongoDbCourse):CourseRepository =>{
 const CreateCourse = async (CourseDetails:Course):Promise<Course>=>{
   // console.log(CourseDetails);
    const CreatedCourse = await CourseRepository.create(CourseDetails)
    console.log(CreatedCourse?CreatedCourse:null,"nothing is getting");
    
    return CreatedCourse
 }
 const FindCourseById =async (_id:string):Promise<void | CourseRepository | UpdateCourseResult> =>{
    const FoundedCourseByI = await CourseRepository.findOne({_id:_id})
    return FoundedCourseByI?.toObject() 
 }
 const FindCourse = async ():Promise<Course[]>=>{
   const FoundedCourse = await CourseRepository.find()
   return FoundedCourse
 }
 const BlockCourseByid =async (_id:string):Promise<void | CourseRepository | UpdateCourseResult | UpdateWriteOpResult> =>{
    const BlockedCouuse =  await CourseRepository.updateOne({_id:new ObjectId(_id)},{$set:{Status:false}})
    return BlockedCouuse
 }
 const UnblacockCourseByid =async (_id:string):Promise<void | CourseRepository | UpdateCourseResult|UpdateWriteOpResult> =>{
   const UnblockedCourse = await CourseRepository.updateOne({_id:new ObjectId(_id)},{$set:{Status:true}})
   return UnblockedCourse
 }
 const CourseBycateogry =async (Category:string):Promise <void | Course[] | UpdateCourseResult>=>{
   const FoundedCourseByCategory = await CourseRepository.find({SelectedCategory:Category})
   return FoundedCourseByCategory
 } 
 const CourseBySubcateogry =async (SubCategory:string):Promise <void | Course[] | UpdateCourseResult>=>{
  const FoundedCourseBySubCategory = await CourseRepository.find({SelectedSubCategory:SubCategory})
  return FoundedCourseBySubCategory
}
 const MentorTakeCourseByName = async (Mentorname:string):Promise <void | Course[] | UpdateCourseResult>=>{
   const FoundedCourseByName = await CourseRepository.find({Mentorname:Mentorname})
   return FoundedCourseByName
 }
 
 const MentorAddClasses =async (_id:string ,Classdatas:object):Promise<void | CourseRepository | UpdateCourseResult|UpdateWriteOpResult> => {
    const ClassUpdatedCourse = await CourseRepository.updateOne({_id:new ObjectId(_id)},{$push:{Class:Classdatas}})
  return ClassUpdatedCourse 
 }
return{
CreateCourse,
FindCourseById,
FindCourse,
BlockCourseByid,
UnblacockCourseByid,
CourseBycateogry,
CourseBySubcateogry,
MentorTakeCourseByName,
MentorAddClasses
}  
}