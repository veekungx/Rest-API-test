const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret = require('../secret');

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [{
    access: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true
    }
  }]
})

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      next();
    } catch (e) {
      throw new Error(e);
    }
  } else {
    next();
  }
});

UserSchema.methods.toJSON = function () {
  const { email } = this.toObject();
  return { email }
}

UserSchema.statics.findByToken = async function (token) {
  let decode;
  try {
    decode = jwt.decode(token, secret);
  } catch (e) {
    throw new Error(e);
  }

  if (!decode) return null;

  const { userId } = decode;

  const user = await UserModel.findOne({
    _id: userId,
    // "tokens.token": token,
    // "tokens.access": 'auth'
  });
  return user;
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  UserModel,
}