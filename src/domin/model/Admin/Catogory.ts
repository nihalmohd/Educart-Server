
import { ObjectId } from 'bson'; 

export interface CategoryModel{
    Category:string,
   Subcategory:string[]
}

export interface UpdateCategoryResult {
    acknowledged: boolean;
    modifiedCount: number;
    upsertedId: ObjectId | null;
    upsertedCount: number;
    matchedCount: number;
  }