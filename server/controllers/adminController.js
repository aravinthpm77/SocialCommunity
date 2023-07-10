const adminModel = require('../models/adminModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
module.exports.getAdmins = async (req, res) => {
    const _data = await adminModel.find({})
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
    }
}

module.exports.addAdmins = async (req, res) => {
    const {name,email,password}=req.body;
    try{ 
        console.log(name,email,password,"AdminCon")
        const emailexists =await adminModel.findOne({email})
        if(emailexists){
            console.log(emailexists)
            return res.send({code:404,message:"User Already Exists"})
            
        }
        const hashedPassword =await bcrypt.hash(password,12)
        const newUser =new adminModel({name:name,email:email,password:hashedPassword})
        const success =await newUser.save()
        const token=await jwt.sign({email:newUser.email,id:newUser._id})
        res.send({code:200,result:newUser,token})


        if (success) {
            res.send({ code: 200, message: 'success', })
        } else {
            return res.send({ code: 500, message: 'Service error in AdminController' })
        }
    }
    catch(err){
        res.send({code:500,message:"Internal Server Error AdminCon ,21AC"})
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
            const ispasscrt = await bcrypt.compare(emailexists.password,password)
            if (ispasscrt === true){
                return res.redirect('/home')
                
            }    
            
            const _token =await jwt.sign({email:emailexists.email , id:emailexists._id},"test",{expiresIn:'1h'})
            return res.send({result:emailexists,_token })
              
        
            
    
                
            
            
        }
        

    }
    catch(err){
        res.send({code:500,message:"Something Went Wrong AdminC",err})

    }
}

