import express from 'express';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);


// Server Listen
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
