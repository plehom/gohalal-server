const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    sellerId : {type:String,required:true},
    title : {type:String,required:true},
    desc : {type:String,required:true},
    price:{type:Number,required:true}
})

const ProductModel = mongoose.model("ProductModel",ProductSchema)

module.exports = ProductModel