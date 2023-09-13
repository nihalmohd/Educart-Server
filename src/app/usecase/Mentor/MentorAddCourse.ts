import { Course } from "../../../domin/model/Mentor/CourseModel"
import { CourseRepository } from "../../../infra/repository/MentorCourse"

export const MentorAddCourseWithClass= (CourseRepository:CourseRepository)=> (courseTitle:string, courseDescription:string, courseLearning:string, courseIncludes:string, coursePrice:number, SelectedCategory:string, ThumbnailLocation:string, SelectedSubCategory:string, DemoVideoLocation:string, className:string, ClassDescription:string, classVideoLocation:string,Mentorname:string,MentorId:string) =>{
    console.log(coursePrice,"indian rupees ",MentorId);
    
const courseDetails :Course={
    courseTitle,
    Mentorname,
    MentorId,
    courseDescription,
    courseLearning,
    courseIncludes,
    coursePrice,
    ThumbnailLocation,
    SelectedCategory,
    SelectedSubCategory,
    DemoVideoLocation,
    Class:[{classname:className,ClassDescription:ClassDescription,classVideoLocation:classVideoLocation}]
}
const CreatedCourse =  CourseRepository.CreateCourse(courseDetails)
console.log(CreatedCourse,"is getting or not i want to check")

return CreatedCourse
}