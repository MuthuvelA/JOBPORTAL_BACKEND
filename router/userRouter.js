const userController = require('../controller/signUpcontroller');
const authController = require('../controller/authController');
const userProfileController = require('../controller/userProfileController');
const employeedetailController = require('../controller/employeedetailController');
const jobPostController = require('../controller/jobPostController');
const recentjobController = require('../controller/recentjobController');
const router = require('express').Router();

router.post('/signup', userController.register);
router.post('/login', authController.login);
router.post('/userprofile', userProfileController.createProfile);
router.post('/employeeprofile', employeedetailController.createEmployerProfile);
router.post('/jobpost', jobPostController.createJobDetail);
router.post('/recentjob', recentjobController.getRecentJobs);


module.exports = router;
