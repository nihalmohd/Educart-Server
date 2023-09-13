import mongoose, { Document, Model, Schema } from "mongoose";
import { Chat } from "../../domin/model/Chat/Chat";

export type MongoDBChat = Model<Document & Chat>;

const chatSchema = new Schema<Chat>(
  {
    chatName: {
      type: "string",
      required: true,
    },
    User: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    Mentor: {
      type: mongoose.Types.ObjectId,
      ref: "Owner",
    },
    latestMessage: {
      type: mongoose.Types.ObjectId,
      ref: "message",
    },
  },
  {
    timestamps: true,
  }
); 
export const chatModel: MongoDBChat = mongoose.connection.model< Document & Chat>("chat", chatSchema);