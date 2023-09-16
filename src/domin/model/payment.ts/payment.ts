import { Document } from "mongoose";
import { ObjectId } from 'bson'; 
import mongoose from "mongoose";

  export interface payment {
    courseId?: mongoose.Types.ObjectId;
    UserId?: mongoose.Types.ObjectId;
    coursePrice?: number;
  }
  