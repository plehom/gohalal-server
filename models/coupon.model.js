const mongoose = require("mongoose")

const CouponSchema = new mongoose.Schema({
    code : {type : String,required:true},
    discount : {type:Number,required:true},
    isUsed : {type:Boolean, default:false}
})

const CouponModel = mongoose.model("CouponModel",CouponSchema)

module.exports = CouponModel