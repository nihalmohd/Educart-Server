import { Course } from "../../../domin/model/Mentor/CourseModel"
import { CourseRepository } from "../../../infra/repository/MentorCourse"

export const MentorAddCourseWithClass= (CourseRepository:CourseRepository)=>async (courseTitle:string, courseDescription:string, courseLearning:string, courseIncludes:string, coursePrice:number, ThumbnailLocation:string, SelectedCategory:string, SelectedSubCategory:string, DemoVideoLocation:string, className:string, ClassDescription:string, classVideoLocation:string) =>{
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
    Class:[{classname:className,ClassDescription:ClassDescription,classVideoLocation:classVideoLocation}]
}
const CreatedCourse = await CourseRepository.CreateCourse(courseDetails)
return CreatedCourse
}