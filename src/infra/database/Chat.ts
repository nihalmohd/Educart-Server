import mongoose, { Document, Model, Schema } from "mongoose";
import { Chat } from "../../domin/model/Chat/Chat";

export type MongoDBChat = Model<Document & Chat>;

const chatSchema = new Schema<Chat>(
  {
    UserId: {
      type: mongoose.Types.ObjectId,
      ref:"user"
    },
    MentorId: {
      type: mongoose.Types.ObjectId,
      ref:"Mentor"

    },
    latestMessage: {
      type: mongoose.Types.ObjectId,

    },
  },
  {
    timestamps: true,
  }
); 
export const chatModel: MongoDBChat = mongoose.connection.model< Document & Chat>("chat",chatSchema);