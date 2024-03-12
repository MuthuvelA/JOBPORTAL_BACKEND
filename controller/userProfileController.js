const userProfileService = require('../server/userProfileService');

exports.createProfile = async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, mobile,address,currentWork, selectedSkill } = req.body;
        
        const userProfile = await userProfileService.createUserProfile(name, email, mobile, address, currentWork, selectedSkill);
        res.status(201).json({ status: true, message: "User profile created successfully", data: userProfile });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Server error" });
    }
};
