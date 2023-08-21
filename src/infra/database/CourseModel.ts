import mongoose, { Schema, Model, Document } from "mongoose";
import { Course } from "../../domin/model/Mentor/CourseModel"


export type MongoDbCourse = Model<Document<any, any, any> & Course>;

const CourseSchema = new Schema({
    courseTitle: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseLearning: {
        type: String,
        required: true
    },
    CourseIncludes: {
        type: String,
        required: true
    },
    coursePrice: {
        type: Number,
        required: true
    },
    ThumbnailLocation: {
        type: String,
        required: true
    },
    SelectedCategory: {
        type: String,
        required: true
    },
    SelectedSubCategory: {
        type: String,
        required: true
    },
    CourseVideo: {
        type: String,
        required: true
    },
    Class: {
        type: [Object],
        required: true
    },
    Status: {
        type: Boolean,
        default:true
    }
})
export const Courses: MongoDbCourse = mongoose.connection.model<Document<any, any, any> & Course>("Courses", CourseSchema)