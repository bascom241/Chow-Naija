import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './utils/connectDb.js';
import cookieParser from 'cookie-parser'
import  userRouter from './routes/authRouter.js'
const app = express();

// Configuration Settings //
dotenv.config();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
connectDb();

app.use("/api", userRouter);
app.listen(5000, () => {
    console.log(`Listening on ${port}`);
})
