const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/status', (req, res) => res.send('OK'));
app.post('/users', (req, res) => {
  const { email, password } = req.body;
});
module.exports = app;

