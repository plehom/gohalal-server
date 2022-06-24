const request = require ("request")
const express = require("express")
const Newsletter = require("../models/newsletter.model")

const router = express.Router()

router.post('/subscribe',(req,res)=>{
    const {email_address} = req.body
    var options = {
        'method': 'POST',
        'url': 'https://us18.api.mailchimp.com/3.0/lists/14abfb098b/members',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Basic YW55c3RyaW5nOjdmZGQ3MDMzZWM3YmZiMzI0YTRkNGVmZTE0MWViYTc4LXVzMTg=',
          'Cookie': 'ak_bmsc=5664E091314DE4747AE76A58308BA8CC~000000000000000000000000000000~YAAQZFtgaDe5RJeBAQAA1SCUlxCCJi5ElDcjA/shcvtviwDHmChHGxPOdSBoVBq58H6VoclwwYD2nEizqjp5HP9jubaCYTFoDT4CTJlinFhtU6ZQECJ4S94N2dRCvXXOkd9Q0YSklgAgLa6ZNWN7EJqAoeNcY1W6Il800OX6rJisl/DVe37GYp/JtYgFPxCYWEijb41CmDyx5/aaPA7sEyHbvDaAdMgySsQqMBVbzNSYA3Wn5Rep8IlNVWO3dpldMUiIv9cSwaFiwMWV650jS1+CqIFegcoVx4BBW7Kx5Hio+lR2fhCeRsVT4q2UV36CK9ynVdpTQtz1Disvw3AJ; bm_sv=EC1D0F8E899BF5272C5C82B73728DE1B~YAAQTltgaMzw35SBAQAAU1+blxDP6D5VN7WEfoteriI3MWhHBJI4mMWvi1Wfnm85H1DujKHSvJEJIdcz96jBXhyoW9P62qdO1Bz4UFiahCUTzj0ZGLbeQEL6Mz7UhcE3ZcyIAirkX76CcDtQLLelKktmWTmaWZB3bfHywqbykcQUazoba3k5cFqWQbR4Y7bbxP92YOgeo6S5/1e4WhBYS1M/9U6Km3gqpRZeP7Wyc9g07NA31iQ/AgxNea4rV1Bvpm/Bn1QBUw==~1'
        },
        body: JSON.stringify({
          "email_address": email_address,
          "status": "subscribed"
        })
      
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
      res.json({status:"ok"})
})

router.post("/savetodb",async (req,res)=>{
    const {email} = req.body
    try{
        const response = await Newsletter.save({email})
    }catch(err){
        res.json({status:"error",error:err})
    }
})

module.exports = router