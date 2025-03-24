import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
dotenv.config();

export const connectDb = async () => {
    try {
        const url = process.env.MONGO_URL
        await mongoose.connect(url);
        console.log("Connected to Database")
    } catch (error) {
        console.log(error.message);
    }
}