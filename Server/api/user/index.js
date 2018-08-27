import express from 'express';
import userModel from './user.model';
const router = express.Router();

router.get('/', (req, res) => {
  userModel.find((err, docs) => {
    if (err) res.send(err);
    res.send(docs);
  });
});

router.post('/add', (req, res) => {
  const { username, password } = req.body;
  const item = new userModel({
    username,
    password,
  });
  item.save();
});

router.put('/:id', (req, res) => {
  const { id } = req.param;
  const { data } = req.body;
  userModel.findOneAndUpdate({_id: id}, {$set: data},
    (err, doc) => {
      if(err) res.send(err);
      res.send(doc);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  userModel.deleteOne({_id: id}, (err, doc) => {
    if(err) res.send(err);
    res.send(doc);
  });
});

export default router;
