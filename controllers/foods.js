const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// app.get('/', (req, res) => {
//   res.render('index.ejs', {
//     user: req.session.user,
//   });
// });

//Index
router.get('/users/:userId/foods', async (req, res) => {
  res.render('foods/index.ejs');
});

//New
router.get('/users/:userId/foods/new', async (req, res) => {

  res.render('/views/foods/new.ejs');
});

//Create
router.post('/users/:userId/foods', async (req, res) => {

});

//Show
router.get('/users/:userId/foods/:itemId', async (req, res) => {

});

//Edit
router.get('/users/:userId/foods/:itemId/edit', async (req, res) => {

});

//Update
router.put('/users/:userId/foods/:itemId', async (req, res) => {

});

//Delete
router.delete('/users/:userId/foods/:itemId', async (req, res) => {

});



module.exports = router, User;