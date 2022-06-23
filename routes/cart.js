const {verifyToken,verifyTokenAndAdmin} = require("../middlewate/verifyJWT")
const express = require("express")

const Cart = require("../models/cart.model")

const router = express.Router()

router.post('/',verifyToken,async(req,res)=>{

    try {
        const response = await Cart.create({
            userId : req.user.id,
        })
        res.json({status:"ok"})
    }catch(err){
        res.json({status:"error",error:err})
    }
})
router.get('/get',verifyToken, async(req,res)=>{
    try{
        const response = await Cart.findOne({userId : req.user.id})
        res.json({status:"ok",msg:response})
    }catch(err){
        res.json({status:"error",error:err})
    }
})

/* router.put('/delete/:cartId',verifyToken,async(req,res)=>{
    const cartId = req.cartId
    try{
        const cart = await Cart.findById(cartId)
        if(!cart){
            res.json({status:"error"})
        }else{

        }
    }
}) */
