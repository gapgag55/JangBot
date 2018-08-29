import express from 'express';
import { sendPush } from '../../services/line';
const router = express.Router();

router.post('/', (req, res) => {
  const { type, text } = req.body;
  const message = [{ type, text }];
  sendPush('Uaa7caad531b558caecf9fa249d3ee538', message);
  res.send(req.body);
});

export default router;
