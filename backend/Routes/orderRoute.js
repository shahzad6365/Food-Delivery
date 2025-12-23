import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrder, placeOrder, updateStatus, userOrder, verifyOrder } from "../Controllers/orderController.js"  


const orderrouter = express.Router()

orderrouter.post("/place",authMiddleware,placeOrder)
orderrouter.post("/verify",verifyOrder)
orderrouter.post("/userorder",authMiddleware,userOrder)
orderrouter.get("/list",listOrder)
orderrouter.post("/status",updateStatus)

export default orderrouter;