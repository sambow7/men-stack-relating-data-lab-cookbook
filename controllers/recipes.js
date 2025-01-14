const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

router.get('/', (req, res) => {
    res.send('This is the recipes page');
});

router.get('/new', (req, res) => {
    res.send('This is the new recipe page');
});

router.post('/', (req, res) => {
    res.send('This is the post route for recipes');
});

module.exports = router;