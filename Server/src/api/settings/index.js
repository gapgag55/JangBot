import express from 'express';
import Homework from './setting.model';
import Controller from '../controller';
const router = express.Router();
const {
  get,
  post,
  remove,
} = Controller(Homework);

router.get('/', get);
router.post('/', post);
router.delete('/:id', remove);

export default router;
