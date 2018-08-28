import express from 'express';
import homeworkRoute from './homework';
import userRoute from './user';

const router = express.Router();
router.use('/homework', homeworkRoute);
router.use('/user', userRoute);

export default router;