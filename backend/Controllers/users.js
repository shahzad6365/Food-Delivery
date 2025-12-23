import userModel from "../Models/usermodel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login 
const loginUser = async (req,res)=>{
    const {email,password}=req.body
    try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.send({success:false,message:"User does not exist"})
        }
        const ismatch = await bcrypt.compare(password,user.password)
        if(!ismatch){
            return res.send({success:false, message:"Invalid password or Email"})
        }
        const token = createToken(user._id)
        res.send({success:true,token})

    }catch(err){
        console.log(err)
        res.send({success:false, message:"Error"})
    }


}

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT)
}

//Register user
const registerUser = async(req,res)=>{
    const {name,password,email}=req.body
    try{
        //checking user exist 
        const exist = await userModel.findOne({email})
        if(exist){
            return res.send({success:false , message:"User already Exist"})
        }

        //validate email or password
        if(!validator.isEmail(email)){
            return res.send({success:false , message:"Plz Enter Valid Email"})
        }

        if(password.length<8){
            return res.send({success:false , message:"Plz Enter Strong password"})
        }

        //hashing user password

        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashpassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.send({success:true, token})
    }catch(err){
        console.log(err)
        res.send({success:false, message:"error"})

    }
}

export {loginUser,registerUser}