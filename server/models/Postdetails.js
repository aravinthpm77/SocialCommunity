import mongoose from 'mongoose'


const PostDetailSchema = mongoose.Schema({
    posttext:{type:String },
    postimage:{type:String } ,
    postlikecount:{type:Number,default :0},
    userPosted:{type:String },
    userId:{type:String},
    postedOn:{type:Date,default:Date.now},
    
})

export default mongoose.model("Postdetails",PostDetailSchema)