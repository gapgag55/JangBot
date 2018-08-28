import express from 'express';
import Subject from './subject.model';
const router = express.Router();
const {
  get,
  post,
  update,
  remove,
} = Controller(Subject);

router.get('/', get);
router.post('/', post);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
