var express = require('express');
var router = express.Router();

// require the controller with functionality
var skillsCtrl = require('../controllers/skills');

// all actual paths start with '/skills'

// GET
router.get('/', skillsCtrl.index);

// GET .show
router.get('/:id', skillsCtrl.show);

module.exports = router;
