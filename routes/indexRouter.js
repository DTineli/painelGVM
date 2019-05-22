const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/:id', indexController.postIndex);
router.get('/', indexController.index);

module.exports = router;