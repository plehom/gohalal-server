require('dotenv').config()

const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")



const userRoute = require("./routes/auth")
///const productsRoute = require("./routes/products")
const discountRoute = require("./routes/discount")
const newsLetterRoute = require("./routes/newsletter")
const preorderRoute = require("./routes/preorder")
const contactRoute = require("./routes/contact")

const app = express()

app.use(cors())

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("USPJESNO")
})

app.use(express.json())
app.use(express.urlencoded())

app.use('/api/auth',userRoute)
//app.use('/api/products',productsRoute)
app.use('/api/discount',discountRoute)
app.use('/api/newsletter',newsLetterRoute)
app.use('/api/preorder',preorderRoute)
app.use('/api/contact',contactRoute)

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))


/*
curl --request GET \
--url 'https://us18.api.mailchimp.com/3.0/' \
--user 'anystring:7fdd7033ec7bfb324a4d4efe141eba78-us18
*/