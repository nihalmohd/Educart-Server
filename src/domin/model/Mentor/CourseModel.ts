import { ObjectId } from "mongoose";

export interface Course {           
    courseTitle : string;
    courseDescription : string;
    courseLearning:string
    courseIncludes:string
    coursePrice : number;
    ThumbnailLocation : string;
    SelectedCategory : string;
    SelectedSubCategory : string;
    DemoVideoLocation : string;
    Class ?:[{classVideoLocation:string,classname:string,ClassDescription:string}];
    // MentorId : string;
    Status ?: boolean;
    // User ?: [string];
    // stud ?: [{id:string,date:Date,month:string,fees:number}]
    // paymentStatus ?: boolean;

}

export type UpdateCourseResult = {
    // Define your custom return type here
    success: boolean;
    message: string;
  };
// export interface UpdateCourseResult {
//     acknowledged: boolean;
//     modifiedCount: number;
//     upsertedId: ObjectId | null;
//     upsertedCount: number;
//     matchedCount: number;

//   }





