const mongoose = require('mongoose');

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

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

const User = mongoose.model('User', userSchema);

module.exports = User;
