import express from 'express';
import notificationRoute from './notification';
import homeworkRoute from './homework';
import userRoute from './user';

const router = express.Router();
router.use('/notification', notificationRoute);
router.use('/homework', homeworkRoute);
router.use('/user', userRoute);

export default router;