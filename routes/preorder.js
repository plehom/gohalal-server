const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Preorder = require("../models/preorder.model")

router.get('/get',async (req,res)=>{
    try{
        const response = await Preorder.find({})
        res.json({status:"ok",response:response})
    }catch(err){
        res.json({status:"error"})
    }
})

router.post('/create',async(req,res)=>{
    const {product,first_name,last_name,email,adress,city,house_number,zip_code} = req.body
    try{
        const preord = await Preorder.create({
            product,
            first_name,
            last_name,
            email,
            adress,
            city,
            house_number,
            zip_code
        })
        res.json({status:"ok"})
    }catch(err){
        res.json({status:"error",error:err})
    }
})

module.exports = router