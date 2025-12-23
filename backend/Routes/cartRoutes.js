import express from "express"
import { addToCart,removeFromCart,getCart } from "../Controllers/cart.js"
import authMiddleware from "../middleware/auth.js"

const cartrouter = express.Router()

cartrouter.post("/add",authMiddleware,addToCart)
cartrouter.post("/remove",authMiddleware,removeFromCart)
cartrouter.post("/get",authMiddleware,getCart)

export default cartrouter;