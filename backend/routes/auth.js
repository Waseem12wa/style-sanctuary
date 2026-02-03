import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersPath = path.join(__dirname, '../data/users.json');

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key';

const getUsers = () => {
    const data = fs.readFileSync(usersPath, 'utf-8');
    return JSON.parse(data);
};

const saveUsers = (users) => {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
};

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const users = getUsers();

        if (users.find(u => u.email === email)) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: Date.now(),
            name,
            email,
            password: hashedPassword,
            verified: false // Email verification requirement
        };

        users.push(newUser);
        saveUsers(users);

        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

        // Simulate Email Sending
        console.log(`[SIMULATION] Verification Link: http://localhost:5173/verify-email?token=${token}`);

        res.status(201).json({
            message: 'User created. Please check your email to verify.',
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Verify Email
router.post('/verify-email', (req, res) => {
    const { token } = req.body;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const users = getUsers();
        const user = users.find(u => u.email === decoded.email);

        if (!user) return res.status(400).json({ message: 'Invalid token' });

        user.verified = true;
        saveUsers(users);

        res.json({ message: 'Email verified successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid or expired token' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = getUsers();
        const user = users.find(u => u.email === email);

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        /* 
        // Uncomment to enforce verification
        if (!user.verified) {
          return res.status(403).json({ message: 'Email not verified' });
        } 
        */

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Forgot Password (Simulated)
router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    // Check if user exists...
    console.log(`[SIMULATION] Password Reset Link for ${email}: http://localhost:5173/reset-password?token=fake-reset-token`);
    res.json({ message: 'Password reset link sent' });
});

export default router;
