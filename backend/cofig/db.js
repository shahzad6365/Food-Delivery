import mongoose from "mongoose"

export const connect = async()=>{
    await mongoose.connect("mongodb+srv://Shahzad:11223344@cluster0.gxml6ar.mongodb.net/food_del").then(()=>{
        console.log("DB Connect")
    })
}