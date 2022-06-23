require('dotenv').config()

const express = require("express")
const path = require("path")
const mongoose = require("mongoose")

const userRoute = require("./routes/auth")
const productsRoute = require("./routes/products")
const discountRoute = require("./routes/discount")

const app = express()

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
app.use('/api/products',productsRoute)
app.use('/api/discount',discountRoute)

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))
