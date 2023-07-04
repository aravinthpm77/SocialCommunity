import Postdetails from '../models/Postdetails.js'
import mongoose from 'mongoose'

export const Postimage =async(req,res)=>{
    const {base64}=req.body;
    const postData=req.body;
    const post=new Postdetails({...postData,userId:req.userId});
    try{
        Postdetails.create({postimage:base64});
        await post.save();
        body:JSON.stringify({
            base64:Postimage
        })
        res.status(200).json("Posted Successfully")
    }
    catch(error){
        console.log(error)
        res.status(409).json("Couldn't Post Successfully")
    }
}

