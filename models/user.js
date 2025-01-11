const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  description: { type: String },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  panrty: [foodSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
