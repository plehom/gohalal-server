const mongoose = require("mongoose")

const PreorderSchema = new mongoose.Schema({
    "product":{type:String},
    "first_name":{type:String},
    "last_name":{type:String},
    "email":{type:String},
    "adress":{type:String},
    "city":{type:String},
    "house_number":{type:Number},
    "zip_code":{type:Number}
})

const Preorder = mongoose.model("preorder",PreorderSchema)

module.exports = Preorder
