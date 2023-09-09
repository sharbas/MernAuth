import express from 'express';
const router = express.Router()
import {  registerUser,
    authUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

    router.post('/',  registerUser); // Wrap in a function
    router.post('/auth', authUser )// Wrap in a function
    router.post('/logout',  logoutUser); // Wrap in a function
    router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile); // Wrap in functions
    
export default router;
