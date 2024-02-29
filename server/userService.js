const userModel = require('../model/userModel');

class userService{
    static async userRegistration(username,email,password){
        try{
            const createUser = new userModel({username,email,password});
            return await createUser.save();
        }catch(err){
           throw err;
        }
    }
}


module.exports = userService;