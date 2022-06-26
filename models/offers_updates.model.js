const mongoose = require("mongoose")

const OffersSchema = new mongoose.Schema({
    "first_name":{type:String},
    "last_name":{type:String},
    "email":{type:String},
    "city":{type:String}
})

const Offers = mongoose.model("offers",OffersSchema)

module.exports = Offers
