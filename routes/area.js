const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Area = require("../models/new_area.model")

router.post("/create",async(req,res)=>{
    const {first_name,last_name,zip_code,del_adress,adress,city,state,country,phone,email} = req.body
    try{
        const response = await Area.create({
            first_name,
            last_name,
            zip_code,
            del_adress,
            adress,
            city,
            state,
            country,
            phone,
            email
        })
        res.json({status:"ok"})
    }catch(err){
        res.json({status:"error"})
    }
})

router.get("/get",async(req,res)=>{
    const response = await Area.find()
    res.json(response)
})

module.exports = router