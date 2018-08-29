import express from 'express';
import Log from './log.model';
import Controller from '../controller';
const router = express.Router();
const {
  get,
  post,
} = Controller(Log);

router.get('/', get);
router.post('/', post);

export default router;
