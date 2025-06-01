import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true,
}));

app.get('/', (req, res) => {
    res.send('✅ Backend is running on port 8800!');
});

app.use('/auth', authRoute);



app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

const connect=async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
