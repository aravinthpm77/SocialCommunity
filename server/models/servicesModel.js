
const mongoose = require('mongoose');


module.exports = mongoose.model('services22', {
    title: String,
    imageUrl: String,
    UserPosted:{type:String,required:"Questions must have an author"},
    userId:{type:String},
    postedOn:{type:Date,default:Date.now},
});
