import { ObjectId } from "mongoose";

export interface Course {
    title : string;
    Price : number;
    category : string;
    subcategory : string[];
    description : string;
    thumbnail : string;
    Demovideo : string;
    MentorId : string;
    status ?: boolean;
    User ?: [string];
    Class ?:[{video:string,thumbnail:string,title:string,description:string,id:Date}];
    stud ?: [{id:string,date:Date,month:string,fees:number}]
    // paymentStatus ?: boolean;
}

export interface UpdateCourseResult {
    acknowledged: boolean;
    modifiedCount: number;
    upsertedId: ObjectId | null;
    upsertedCount: number;
    matchedCount: number;
  }