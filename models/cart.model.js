const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    userId : { required :true, type:String},
    products : [
        {
            productId : { type : String},
            quantity : {type: Number,default:1} 
        }
    ]
})

const CartModel = mongoose.model("CartModel",CartSchema)

module.exports = CartModel