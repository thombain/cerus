const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

router.get('/', controller.home);
router.get('/about', controller.about);
router.get('/contact', controller.contact);

module.exports = router;