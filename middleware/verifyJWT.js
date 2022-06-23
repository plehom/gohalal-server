const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token){
        return res.status(403).send("A token is required for authentication")
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SEC)
        req.user = decoded

    }catch(err){
        return res.status(401).send("Invalid Token")
    }
    next()
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };

module.exports = {
    verifyToken,
    verifyTokenAndAdmin
}