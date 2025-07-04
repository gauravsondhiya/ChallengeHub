import express from 'express';
import { User } from '../models/User.models.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and Password are required' });
        }

        const signup = new User({ username, password });
        await signup.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
