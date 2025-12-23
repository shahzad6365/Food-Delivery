import foodModel from "../Models/foodmodel.js";
import fs from "fs"
import foodrouter from "../Routes/foodroutes.js";

const addfood = async (req, res) => {
    let image = `${req.file.filename}` 
    let {name,description,price,category}=req.body
    const food = new foodModel({
        name,description,price,category,image
    })
    try { 
        await food.save()
        res.send({ staus: 1, message: "successfully added food" ,data:food })
    } catch (err) {
        res.send({ staus: 0, message: "Error" })
    }

}

const listfood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.send({ status: 1, message: "all data", data: food })
    } catch (err) {
        console.log(err)
        res.send({ status: 0, message: "Error" })
    }

}

const removefood = async (req, res) => {
    try {
        let itemid = req.body.id
        const food = await foodModel.findOne({_id:itemid})
        if (!food) {
            return res.send({status: 0, Message: "Food item not found."});
        }
        fs.unlink(`uploads/${food.image}`,(err)=>{
            if (err) console.error("FS Unlink Error:", err);
        })
        await foodModel.deleteOne({_id:itemid})
        res.send({status:1,message:"deleted successfully"})
    } catch (err) {
        console.log(err)
        res.send({status:0,Message:"ERROR"})

    }
}

export { addfood, listfood, removefood }