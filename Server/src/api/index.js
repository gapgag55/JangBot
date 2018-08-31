import express from 'express';
import notificationRoute from './notification';
import homeworkRoute from './homework';
import lineRoute from './line';
import userRoute from './user';

const router = express.Router();
router.use('/notification', notificationRoute);
router.use('/homework', homeworkRoute);
router.use('/line', lineRoute);
router.use('/user', userRoute);

export default router;