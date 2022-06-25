const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "subject":{type:String},
    "message":{type:String}
})

const Contact = mongoose.model("contact",ContactSchema)

module.exports = Contact