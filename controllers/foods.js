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
router.get('/foods', async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  res.render('foods/index.ejs'); { user: currentUser };
});

// GET New
router.get('/new', async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  res.render('foods/new.ejs'); { user: currentUser };
});

// POST Create
router.post('/:userId/foods', async (req, res) => {
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

//Show
router.get('/:userId/foods/:itemId', async (req, res) => {

});

//Edit
router.get('/:userId/foods/:itemId/edit', async (req, res) => {

});

//Update
router.put('/:userId/foods/:itemId', async (req, res) => {

});

//Delete
router.delete('/:userId/foods/:itemId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    curr
});



module.exports = router, User;