import mongoose, { Document, Model, Schema } from "mongoose";
import { message } from "../../domin/model/Message/Message";

export type MongoDBMessage = Model<Document & message>;

const messageSchema = new Schema<message>(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    Mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
    },
    content: {
      type: "string",
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chat",
    }, 
  },
  {
    timestamps: true,
  } 
);

export const messageModel: MongoDBMessage = mongoose.connection.model<Document & message>("message", messageSchema);