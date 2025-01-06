const express = require('express');
const router = express.Router();
const User = require('../models/user.js');


router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render('index.ejs', {
      foods: currentUser.pantry,
    });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

// GET Index
router.get('/users/:userId/foods', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.redirect('/'); // Redirect home if user is not found
    }
    res.render('foods/index.ejs', { user });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// GET New
router.get('/users/:userId/foods/new', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.redirect('/'); // Redirect home if user is not found
    }
    res.render('foods/new.ejs', { user });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// POST Create
router.post('/users/:userId/foods', async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  currentUser.pantry.push({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  });
  await currentUser.save();
  res.redirect(`/users/${req.session.user._id}/foods`);
  console.log(err);
  res.redirect('/');
});




module.exports = router, User;