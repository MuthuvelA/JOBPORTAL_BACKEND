const userModel = require('../model/userModel');
const userProfileModel =require('../model/userprofileModel');

class userService {
    static async userRegistration(username, email, password) {
        try {
            const createUser = new userModel({ username, email, password });
            return await createUser.save();
        } catch (err) {
            throw err;
        }
    }

    static async userLogin(Username, Pass) {
        try {
            let user;
            user = await userModel.findOne({ username: Username, password: Pass });
            if(!user){
                user=await userModel.findOne({email:Username,password:Pass});
            }
            return user;
        } catch (err) {
            throw err;
        }
    }
    static async createUserProfile(name, email, mobile, pincode, state, currentWork, selectedSkill) {
        try {
            const createUserProfile = new userProfileModel({ name, email, mobile, pincode, state, currentWork, selectedSkill });
            return await createUserProfile.save();
        } catch (err) {
            throw err;
        }
    }
    
    

    
    
    
}

module.exports = userService;
