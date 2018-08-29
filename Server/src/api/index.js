import express from 'express';
import notificationRoute from './notification';
import homeworkRoute from './homework';
import settingsRoute from './settings';
import userRoute from './user';
import loggingRoute from './logging';

const router = express.Router();
router.use('/notification', notificationRoute);
router.use('/homework', homeworkRoute);
router.use('/settings', settingsRoute);
router.use('/user', userRoute);
router.use('/logging', loggingRoute);

export default router;