const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// GET Index
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

// GET New
router.get('/new', async (req, res) => {
    res.render('foods/new.ejs');
});

// POST Create
router.post('/', async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  currentUser.pantry.push({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  });
  await currentUser.save();
  res.redirect(`/users/${currentUser._id}/foods`);
  console.log(err);
  res.redirect('/');
});


// GET Show
router.get('/:itemId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const food = currentUser.pantry.id(req.params.itemId);
    res.render('foods/show.ejs', { food });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});



// GET Edit 
router.get('/:itemId/edit', async (req, res) => {
  res.render('foods/edit.ejs');
});

// PUT Update
router.put('/:itemId', async (req, res) => {
  res.redirect(`/users/${req.session.user._id}/foods`);
});

// DELETE Destroy
//‘/:itemId’




module.exports = router, User;