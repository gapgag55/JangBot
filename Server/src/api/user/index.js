import express from 'express';
import {
  get,
  post,
  update,
  remove
} from './user.model';
const router = express.Router();

router.get('/', get);
router.post('/', post);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
