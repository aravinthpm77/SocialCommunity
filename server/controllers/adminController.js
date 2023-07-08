const adminModel = require('../models/adminModel')
const jwt = require('jsonwebtoken')

module.exports.getAdmins = async (req, res) => {
    const _data = await adminModel.find({})
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
    }
}

module.exports.addAdmins = async (req, res) => {
    console.log(req.file,req.boby,16)
    try{
        const name=req.body.name
        const email =req.body.email
        const password =req.body.password
        
        if (!name || !email || !password){
            return res.send({code:400,message:"Bad Request : Incomplete Submition ."})
        }
        const newUser =new adminModel({name:name,email:email,password:password})
        const success =await newUser.save()
        
        if (success) {
            return res.send({ code: 200, message: 'success', })
            {console.log("Success")}
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }
    }
    catch(err){
        res.send({code:500,message:"Internal Server Error ,21AC"})
    }
    
}

module.exports.LoginAdmins = async(req,res) => {
    const{email,password}=req.body;
    
    try{
        const emailexists = await adminModel.findOne({email:email})
        if(emailexists){
            if(emailexists.password!==password){
                return res.send({code:400,message:'Email or Password Not Found'})
            }
        
            const _token =await jwt.sign({ ...emailexists},"test",{expiresIn:'1h'})
            return res.send({
                code:200,
                message:"Success",
                token:_token,
                type:existinguser.type
            })

            
        }
        else{
            return res.send({ code: 500, message: 'Service error' })
        }

    }
    catch(err){
        res.send({code:500,message:"Something Went Wrong",err})

    }
}

