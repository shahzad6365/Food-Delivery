import mongoose from "mongoose"

export const connect = async()=>{
    await mongoose.connect("#").then(()=>{
        console.log("DB Connect")
    })
}
