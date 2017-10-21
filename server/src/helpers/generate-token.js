const jwt = require('jsonwebtoken');
const secret = require('../secret');
const generateToken = (userId) => {
  const access = 'auth';
  const token = jwt.sign({ userId, access }, secret)
  return token;
};

module.exports = generateToken;