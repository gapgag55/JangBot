import express from 'express';
import Line from './line.model';
import Controller from '../controller';
const router = express.Router();
const {
  get,
  post,
  remove,
} = Controller(Line);

router.get('/', get);
router.post('/', (req, res) => {
  const message = req.body.events[0];
  const lineId = message.source.groupId;
  const type = message.source.type;

  req.body = {lineId, type};
  post(req, res);
});
router.delete('/:id', remove);

export default router;
