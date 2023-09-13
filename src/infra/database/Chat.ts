import mongoose, { Document, Model, Schema } from "mongoose";
import { Chat } from "../../domin/model/Chat/Chat";

export type MongoDBChat = Model<Document & Chat>;

const chatSchema = new Schema<Chat>(
  {
    User: {
      type: mongoose.Types.ObjectId,
      
    },
    Mentor: {
      type: mongoose.Types.ObjectId,

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