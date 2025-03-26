import mongoose from 'mongoose';
import vaidator from 'validator';

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true, "User Name is Required"],
        unqiue:true 
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        validate:{
            validator: function (v) {
                return vaidator.isEmail(v);
            },
            message:(props)=> `${props.v} is not a valid Email Address` 
        }
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        minLength:8
    },
    
    isVerified:{
        type:Boolean, 
        default:false
    },
    lastLogin:{
        type:Date,
        default:Date.now()
    },
    resetPasswordToken:String,
    resetPasswordExpiresDate:Date,
    verificationToken:String,
    verificationTokenExpiresDate:Date
})

export const User = mongoose.model("User", userSchema);
