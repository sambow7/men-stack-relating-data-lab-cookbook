const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/users/:userId/foods', async (req, res) => {
  res.render('foods/index.ejs');
});

router.get('/users/:userId/foods/new', async (req, res) => {
  res.render('foods/new.ejs');
});

router.post('/users/:userId/foods', async (req, res) => {
  res.send('POST /users/:userId/foods');
})

module.exports = router, User;