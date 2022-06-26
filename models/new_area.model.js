const mongoose = require("mongoose")

const AreaSchema = new mongoose.Schema({
    "first_name":{type:String},
    "last_name":{type:String},
    "zip_code":{type:String},
    "del_adress":{type:String},
    "adress":{type:String},
    "city":{type:String},
    "state":{type:String},
    "country":{type:String},
    "phone":{type:String},
    "email":{type:String}
})

const Area = mongoose.model("area",AreaSchema)

module.exports = Area