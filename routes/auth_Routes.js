const express = require('express');
const router = express.Router();
const userClt = require('../controllers/authController');

router.post('/signUp', userClt.signUp);
router.post('/login', userClt.login);

module.exports = router;
