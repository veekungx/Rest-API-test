const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { UserModel } = require('./models/user');
const generateToken = require('./helpers/generate-token');
const authenticate = require('./middlewares/authenticate');
const { login } = require('./controllers/user-controller');
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
  let accessToken;
  try {
    await user.save();
    accessToken = generateToken(user._id.toHexString());
    user.tokens.push(accessToken);
    await user.save();
  } catch (e) {
    return res.status(400).send(e);
  }

  return res
    .set('x-auth', accessToken.token)
    .send(user);
});

app.post('/users/login', login);

module.exports = app;
