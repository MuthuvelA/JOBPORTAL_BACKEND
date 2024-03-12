const userProfileModel =require('../model/userProfileModel');
class userProfileService{
    static async createUserProfile(name, email, mobile,address, currentWork, selectedSkill) {
        try {
            const createUserProfile = new userProfileModel({ name, email, mobile,address, currentWork, selectedSkill });
            return await createUserProfile.save();
        } catch (err) {
            throw err;
        }
    }
}
module.exports=userProfileService;