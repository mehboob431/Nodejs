import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        description: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            trim: true,
        },
        quantity: {
            type: Number,
            default: 0,
        
        }, phone_no: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        categoryId: {
                type: Schema.Types.ObjectId,
                ref:"Category"
            },
        isActive: {
            type: Boolean,
            default:0,
        }
    }
)
export const  product = mongoose.model("Product", productSchema);