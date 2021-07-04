const express = require('express');
const meController = require('../app/controllers/MeController');
const router = express.Router();

const newsController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

module.exports = router;
