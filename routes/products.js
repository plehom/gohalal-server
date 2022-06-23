const express = require("express")
const mongoose = require("mongoose")
const Products = require("../models/product.model")

const router = express.Router()

const verifyAuth = require("../middleware/verifyJWT")

router.get("/get",verifyAuth,async (req,res)=>{
    try{
        const products = await Products.find()
        res.json({status:"ok",products})
    }catch(err){
        res.json({status:"error",error:err})
    }
})
router.post("/create",verifyAuth,async(req,res)=>{
    const {title,desc,price}=req.body
    const sellerId = req.user.id

    try{
        const response = await Products.create({
            sellerId,
            title,
            desc,
            price
        })
        res.json({status:"ok",msg:response})
    }catch(err){
        res.json({status:"error",error:err})
    }
})

router.put("/del/:id",verifyAuth, async(req,res)=>{
    const id = req.id
    try{
        const product = await Products.findById(id)
        if (product.sellerId == req.user.id){
            const response = product.delete()
            res.json({status:"ok",msg:response})
        }else{
            res.json({status:"error"})
        }
        
    }catch(err){
        res.json({status:"error"})
    }
})



module.exports = router