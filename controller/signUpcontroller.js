const userService = require('../server/userService');

 exports.register = async(req,res,next) =>{
    try{
        const {username,email,password} = req.body;
        console.log(username,email,password);

        const sucessRes = await userService.userRegistration(username,email,password);
        console.log(email,password);
        res.json({status:true,message:"successfully registered....!"});
        /*if(password===confirmPassword){
            const sucessRes = await userService.userRegistration(email,password);
            console.log(email,password);
            res.json({status:true,message:"successfully registered....!"});
        }else{
            res.json({status:false,message:"Password and confirm not matched"});
        }*/
        
    }catch(err){
       res.json({status:false,message:"Email id is already taken"});
    }
}

