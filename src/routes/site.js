const express = require('express');
const siteController = require('../app/controllers/siteController');
const router = express.Router();

const newsController = require('../app/controllers/siteController');

router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;
