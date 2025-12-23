import jwt from "jsonwebtoken"
const authMiddleware = async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.send({success:false , message:"Not autherized Login again"})
    }
    try{
        const token_decode=jwt.verify(token,process.env.JWT)
    
        // req.body.userId=token_decode.id;
        req.user = { id: token_decode.id };
        next();

    }catch(err){
        console.log(err)
        res.send({success:false,message:"Error"})

    }

}

export default authMiddleware;