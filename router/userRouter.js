const userController = require('../controller/signUpcontroller');
const router = require('express').Router();
//const userModel = require('../model/userModel');


router.post('/signup',userController.register);

module.exports = router;