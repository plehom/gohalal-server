const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Offers = require("../models/offers_updates.model")

router.post("/create",async(req,res)=>{
    const {first_name,last_name,email,city} = req.body
    try{
        const response = await Offers.create({
            first_name,
            last_name,
            email,
            city
        })
        res.json({status:"ok"})
    }catch(err){
        res.json({status:"error"})
    }
})

router.get("/get",async(req,res)=>{
    const response = await Offers.find()
    res.json(response)
})

module.exports = router