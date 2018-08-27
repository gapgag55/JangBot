import express from 'express';
import homeworkModel from './homework.model';
const router = express.Router();

router.get('/', (req, res) => {
  homeworkModel.find((err, docs) => {
    if (err) res.send(err);
    res.send(docs);
  });
});

router.post('/', (req, res) => {
  const data = req.body;
  const item = new homeworkModel(data);
  item.save((error, item) => {
    res.send(item)
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  homeworkModel.findOneAndUpdate({_id: id}, {$set: data},
    (err, doc) => {
      if(err) res.send(err);
      res.send(doc);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  homeworkModel.deleteOne({_id: id}, (err, doc) => {
    if(err) res.send(err);
    res.send(doc);
  });
});

export default router;
