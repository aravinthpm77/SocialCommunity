const mongoose = require('mongoose');


module.exports = mongoose.model('admin1', {
    name: {type:String,require:true},
    email: {type:String,require:true},
    password: {type:String,require:true},
    dateJoined: {type:Date,default:Date.now},
});



