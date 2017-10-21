const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { UserModel } = require('./models/user');
const generateToken = require('./helpers/generate-token');
const authenticate = require('./middlewares/authenticate');
const { getUser, createUser, removeToken, login } = require('./controllers/user-controller');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/taskworld', { useMongoClient: true });

app.use(cors());
app.use(bodyParser.json());

app.get('/status', (req, res) => res.send('OK'));
app.get('/users/me', authenticate, getUser);
app.post('/users', createUser);
app.post('/users/login', login);
app.delete('/users/me/token', authenticate, removeToken)

module.exports = app;
