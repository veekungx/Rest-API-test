const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { UserModel } = require('./models/user');
const generateToken = require('./helpers/generate-token');
const authenticate = require('./middlewares/authenticate');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/taskworld', { useMongoClient: true });

app.use(cors());
app.use(bodyParser.json());

app.get('/status', (req, res) => res.send('OK'));

app.get('/users/me', authenticate, (req, res) => {
  res.json(req.user);
});

app.post('/users', async (req, res) => {
  const { email, password } = req.body;
  const user = new UserModel({ email, password });

  try {
    await user.save();
    const token = generateToken(user._id.toHexString());
    user.tokens.push(token);
    await user.save();
  } catch (e) {
    return res.status(400).send(e);
  }

  return res.json(user);
});

app.post('/users/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findByCredentials(email, password);
  if (!user) return res.status(401).send();
  
  res.send(user);
});

module.exports = app;
