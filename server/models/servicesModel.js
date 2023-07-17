const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

module.exports = mongoose.model('services22', {
    title:{type:String,required:true},
    imageUrl: {type:String,required:true},
    UserPosted:{type:String,required:"Questions must have an author"},
    userId:{type:String},
    postedOn:{type:Date,default:Date.now},
    likes:[{type:ObjectId,ref:"User",default:0}],
    datatype:{type:String,required:true}
});
