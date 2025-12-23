import express from "express"
import cors from "cors"
import { connect } from "./cofig/db.js";
import foodrouter from "./Routes/foodroutes.js";
import userRouter from "./Routes/userroutes.js";
import "dotenv/config"
import cartrouter from "./Routes/cartRoutes.js";
import orderrouter from "./Routes/orderRoute.js";
 let app =express()
connect()
 let port = 4000;
 //api in point 
 
 //middle ware
 app.use(express.json())
 app.use(cors())
 app.use("/api/food",foodrouter)

 app.use("/image",express.static("uploads"))

 app.use("/api/user",userRouter)
 app.use("/api/cart",cartrouter)
 app.use("/api/order",orderrouter)
 app.get("/" , (req,res)=>{
    res.send({status:1 , message:"working"})
 })

 app.listen(port,()=>{
    console.log(`servar started on http://localhost:${port}`)
 })