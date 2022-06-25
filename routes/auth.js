const express = require("express")
const router = express.Router() 
const mongoose = require("mongoose")
const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.get('/test',(req,res)=>{
    res.json({status:"ok"})
})

router.post('/register', async (req,res)=>{
    const {username, email, password : ps} = req.body
    const password = await bcrypt.hash(ps,7)
    
    
        const email_exists = await User.findOne({
            email : email
        })
        const  username_exists = await User.findOne({
            username : username
        })
        console.log(username_exists)
        console.log(email_exists)
        if(email_exists==null && username_exists==null){
            const user = await User.create({
                username,
                email,
                password
            })
            const token = jwt.sign(
                {user_id:user._id,email},
                process.env.JWT_SEC,
                {expiresIn:"2h"}
            )
            user.token = token

            res.json(token)
        }else{
            res.json({status :"error",msg:"User with email / username already exists !"})
        }
    
})
router.post('/login', async (req,res)=>{
    const {username,password} = req.body

    try{
        const user = await User.findOne({
            username : username
        })
        if (!user){
            res.json({status : "error", msg:"Invalid username or password !"})
        }else{
            const auth = await bcrypt.compare(password,user.password)
            if (auth){
                res.json({status:"ok"})
            }else{
                res.json({status:"error",msg:"Invalid username or password !"})
            }
        }
    }catch(err){
        res.json({status:"error"})
    }

})

module.exports = router