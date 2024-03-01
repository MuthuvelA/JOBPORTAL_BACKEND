const signUpService = require('../server/userService');

 exports.register = async(req,res,next) =>{
    try{
        const {username,email,password} = req.body;
        console.log(username,email,password);


        const sucessRes = await signUpService.userRegistration(username,email,password);
        res.json({status:true,message:"successfully registered....!"});
        
    }catch(err){
       res.json({status:false,message:"Email id is already taken"});
    }
}
