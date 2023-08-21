import { Course } from "../../../domin/model/Mentor/CourseModel"
import { CourseRepository } from "../../../infra/repository/MentorCourse"

export const MentorAddCourse= (CourseRepository:CourseRepository)=>async (courseTitle:string,courseDescription:string,courseLearning:string,courseIncludes:string,coursePrice:number,ThumbnailLocation:string,SelectedCategory:string,SelectedSubCategory:string,DemoVideoLocation:string,classname:string,ClassDescription:string,ClassVideoLocation:string) =>{
const courseDetails :Course={
    courseTitle,
    courseDescription,
    courseLearning,
    courseIncludes,
    coursePrice,
    ThumbnailLocation,
    SelectedCategory,
    SelectedSubCategory,
    DemoVideoLocation,
    Class:[{className:classname,ClassDescription:ClassDescription,ClassVideoLocation:ClassVideoLocation}]
}
const CreatedCourse = await CourseRepository.CreateCourse(courseDetails)
return CreatedCourse
}