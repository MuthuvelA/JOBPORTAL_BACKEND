const userProfileService = require('../server/userService');

exports.createProfile = async (req, res, next) => {
    try {
        const { name, email, mobile, pincode, state, currentWork, selectedSkill } = req.body;
        
        const userProfile = await userProfileService.createUserProfile(name, email, mobile, pincode, state, currentWork, selectedSkill);
        res.status(201).json({ status: true, message: "User profile created successfully", data: userProfile });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Server error" });
    }
};
