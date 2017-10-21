const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { UserModel } = require('./models/user');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/taskworld', { useMongoClient: true });

app.use(cors());
app.use(bodyParser.json());
app.get('/status', (req, res) => res.send('OK'));
app.post('/users', async (req, res) => {
  const { email, password } = req.body;
  const user = new UserModel({ email, password });
  let result;
  try {
    result = await user.save();
  } catch (e) {
    res.status(400).send(e);
  }
  return res.json(result);
});
module.exports = app;
