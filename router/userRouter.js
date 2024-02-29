const userController = require('../controller/signUpcontroller');
const authController = require('../controller/authController');
const router = require('express').Router();

router.post('/signup', userController.register);
router.post('/login', authController.login); // New login route

module.exports = router;
