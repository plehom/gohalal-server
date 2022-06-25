const express = require("express")
const Contact = require("../models/contact.model")
const router = express.Router()

router.post('/create',async(req,res)=>{
    const  {name,email,subject,message} = req.body
    try{
        const response = await Contact.create({
            name,
            email,
            subject,
            message
        })
        console.log(response)
        res.json({status:"ok"})
    }catch(err){
        res.json({status:"error",error:err})
    }
})

router.get('/get',async(req,res)=>{
    try{
        const response = await Contact.find()
        res.json({response:response})
    }catch(err){
        res.json({status:"error"})
    }
})

module.exports = router