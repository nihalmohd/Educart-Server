import mongoose, { Schema, Model, Document } from "mongoose";

export interface Admin extends Document {
  Email: string;
  Password: string;
  role: string;
  Status: boolean;
}
