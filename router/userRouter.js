const userController = require('../controller/signUpcontroller');
const authController = require('../controller/authController');
const userProfileController = require('../controller/userProfileController');
const router = require('express').Router();

router.post('/signup', userController.register);
router.post('/login', authController.login);
router.post('/userprofile', userProfileController.createProfile);

module.exports = router;
