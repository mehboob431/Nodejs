import mongoose, { Schema } from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
     {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index:true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            
        },
        password: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
        
        },phone_no: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        }
    }
) 
userSchema.pre("save ", async function (next) {
    if (!this.isModified("password")) return next();
    
    this.password = bcrypt.hash(this.password, 10)
    next()
})
userSchema.methods.isPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken =  function () {
    jwt.sign(
        {
            _id: this._id,
            username:this.username,
            email:this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken =  function () {
    jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const user = mongoose.model("User", userSchema);
