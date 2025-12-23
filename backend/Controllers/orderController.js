import orderModel from "../Models/orderModel.js";
import userModel from "../Models/usermodel.js";
import Stripe from "stripe"


const stripe = new Stripe(process.env.STRIPE)


//place order from frontend
const placeOrder = async (req, res) => {

    const frontend_url = "http://localhost:5174"

    try {
        const neworder = new orderModel({
            userId: req.user.id,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,

        })
        await neworder.save()
        await userModel.findByIdAndUpdate(req.body.userId, { cartdata: {} })

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "PKR",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price *100*270
            },
            quantity:item.quantity

        }))
        line_items.push({
            price_data:{
                currency:"PKR",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*270,
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${neworder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${neworder._id}`,
        })

        res.json({ success: true, session_url: session.url });

    } catch (err) {

        console.log(err)
        res.send({success : false,message:"Error"})

    }


}

const verifyOrder = async(req,res)=>{
    const {orderId,success}=req.body
    try{
        if(success =="true" ){
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
            res.send({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId)
            res.send({success:false, message:"Not Paid"})
        }

    }catch(err){
        console.log(err)
        res.send({success:false,message:"Error"})

    }

}


const userOrder= async (req,res)=>{

    try{
       const orders = await orderModel.find({ userId: req.user.id });
        console.log(orders)
        res.send({success:true, data:orders})


    }catch(err){
        console.log(err)
        res.send({success:false,message:"Error"})

    }

}

//list order for admin
const listOrder = async (req,res)=>{

    try {
        const order = await orderModel.find({})
        res.send({success:true,data:order})

    }catch(err){
        console.log(err)
        res.send({success:false,message:"Error"})

    }

}

const updateStatus = async (req,res)=>{

    try{
        const {orderId,status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.send({success:true,message:"Status Updated"})

    }catch(err){
        console.log(err)
        res.send({success:false, message:"Error"})

    }

}

export { placeOrder , verifyOrder,userOrder,listOrder,updateStatus}
