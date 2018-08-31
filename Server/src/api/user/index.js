import express from 'express';
import jwt from 'jsonwebtoken';
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

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) res.send(user);

    user.comparePassword(password, function(err, isMatch) {
      if (err)
        res.send(err);

      if (!isMatch)
        res.send('no match');

      const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        userId: user._id,
      }, process.env.SECRET_KEY);

      res.send({ token: token })
    });
  });
});

router.post('/auth', (req, res) => {
  let token = req.headers['authorization'];
  token = token.split(' ')[1];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    res.status(200).send(decoded);
  });
});

export default router;
