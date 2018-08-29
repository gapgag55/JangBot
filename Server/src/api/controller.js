export default (Model) => {
  const get = (req, res) => {
    Model.find((err, docs) => {
      if (err) res.send(err);
      res.send(docs)
    });
  }

  const post = (req, res) => {
    const data = req.body;
    const item = new Model(data);
    item.save((error, item) => {
      console.log(error, item);
      if (error) res.send(error);
      res.send(item)
    });
  }

  const update = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    console.log(data);
    Model.findOneAndUpdate({_id: id}, {$set: data},
      (err, doc) => {
        if(err) res.send(err);
        res.send(doc);
      });
  }

  const remove = (req, res) => {
    const { id } = req.params;
    Model.deleteOne({_id: id}, (err, doc) => {
      if(err) res.send(err);
      res.send(doc);
    });
  }

  return {
    get,
    post,
    update,
    remove
  };
}