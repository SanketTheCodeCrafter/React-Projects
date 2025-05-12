import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB connected")
})
.catch((err)=>{
    console.log("MongoDB connection error: ", err)
})





app.use('/api', userRoutes)
app.use('/api', authRoutes)

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})