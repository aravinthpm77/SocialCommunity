const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

module.exports = mongoose.model('admin1', {
    name: {type:String,require:true},
    email: {type:String,require:true},
    password: {type:String,require:true},
    
    dateJoined: {type:Date,default:Date.now},
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
});



