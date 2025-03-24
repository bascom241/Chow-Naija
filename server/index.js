import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './utils/connectDb.js';
const app = express();

// Configuration Settings //
dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
connectDb();
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
