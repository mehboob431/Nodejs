import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
     {
        name : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index:true
        },
        image: {
            type: String,
            required: true,
        },
         isActive: {
            type: Boolean,
            default:0,
        }
    }
) 
export const  Category = mongoose.model("Category", categorySchema);