const { UserModel } = require('../models/user');
const generateAccessToken = require('../helpers/generate-token');
const bcrypt = require('bcrypt');

const UserController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(401).send();
    const isAuthenticated = await bcrypt.compare(password, user.password);

    if (isAuthenticated) {
      const accessToken = generateAccessToken(user._id);
      user.tokens.push(accessToken);
      return res.set('x-auth', accessToken.token).send(user);
    } else {
      return res.status(401).send();
    }
  }
};

module.exports = UserController;