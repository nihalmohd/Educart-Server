import mongoose, { Schema,Model,Document } from "mongoose";
import { CategoryModel} from "../../domin/model/Admin/Catogory";


export type MongoDbCategory = Model<Document<any, any, any> & CategoryModel>;

const CategorySchema=new Schema({
    Category:{
        type:String,
        require:true
    },
    Subcategory:{
        type:[String],
        required:true
    },
    Status:{
        type:Boolean,
        default:true
    }

})
export const Category:MongoDbCategory=mongoose.connection.model<Document<any, any, any> & CategoryModel>("Categories",CategorySchema)