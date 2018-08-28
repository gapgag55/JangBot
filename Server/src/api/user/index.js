import express from 'express';
import User from './user.model';
import Controller from '../controller';
const router = express.Router();
const {
  get,
  post,
  update,
  remove,
} = Controller(User);

router.get('/', get);
router.post('/', post);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
