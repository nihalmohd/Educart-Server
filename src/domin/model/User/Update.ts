import { ObjectId } from 'bson'; 

export interface UpdateResult {
    acknowledged: boolean;
    modifiedCount: number;
    upsertedId: ObjectId | null;
    upsertedCount: number;
    matchedCount: number;
  }