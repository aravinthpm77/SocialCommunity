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
    
    try{ 
        const name=req.body.name
        
        const email =req.body.email
        const password =req.body.password
        const emailexist =await adminModel.findOne({email})
        console.log(name,email,password,emailexist)
        if(emailexist){
            console.log(emailexist)
            return res.send({code:404,message:"User Already Exists"})
            
        }
        if (!name || !email || !password){
            return res.send({code:400,message:"Bad Request : Incomplete Submition ."})
        }
        const newUser =new adminModel({name:name,email:email,password:password})
        const success =await newUser.save()
        const token=await jwt.sign({email:newUser.email,id:newUser._id})


        if (success) {
            res.send({ code: 200, message: 'success', })
            if (token){
                return res.send({code:200,result:newUser,token})
            }
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
        console.log(emailexists,' : loginexistvalue')
        console.log(password)
        if(!emailexists){
            
            return res.redirect('/')
        }
        else{
            console.log(emailexists.password)
            const ispasscrt = await compare(emailexists.password,password)
            if (!ispasscrt){
                res.redirect('/')
                return res.send({code:400,message:"Password Wrong",err})
            }    
            else{
                const _token =await jwt.sign({ ...emailexists},"test",{expiresIn:'1h'})
                return res.send({
                    code:200,
                    message:"Success",
                    token:_token,
                    type:existinguser.type
                })
            }   
        
            
    
                
            
            
        }
        

    }
    catch(err){
        res.send({code:500,message:"Something Went Wrong",err})

    }
}

