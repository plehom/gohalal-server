const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username : {type : String},
    email : {type : String},
    password : {type : String},
    isAdmin : {type:Boolean,default:false}
},{collection : 'users'})

const model = mongoose.model('user',UserSchema)

module.exports = model