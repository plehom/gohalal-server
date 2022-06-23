const express = require("express")
const mongoose = require("mongoose")
const Coupon = require("../models/coupon.model")
const bcrypt = require("bcrypt")

const router = express.Router()

router.post('/create', async (req,res)=>{
    const {code : c,discount} = req.body
    try{
        const code = await bcrypt.hash(c,7)
        const response = await Coupon.create({
            code,
            discount
        })
        res.json({status:"ok",msg:response})
    }catch(err){
        res.json({status:"error",msg:"there is a error"})
    }
})

module.exports = router