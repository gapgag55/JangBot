import express from 'express';
import Homework from './homework.model';
import Controller from '../controller';
const router = express.Router();
const {
  get,
  post,
  update,
  remove,
} = Controller(Homework);

router.get('/', get);
router.post('/', post);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
