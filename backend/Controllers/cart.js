import userModel from "../Models/usermodel.js";


//add to cart

const addToCart = async (req, res) => {
    try {
        // let userdata = await userModel.findOne({ _id: req.body.userId })
         let userdata = await userModel.findById(req.user.id);
        let cartdata = await userdata.cartdata;
        if (!cartdata[req.body.itemId]) {
            cartdata[req.body.itemId] = 1
        }
        else {
            cartdata[req.body.itemId] += 1
        }
        // await userModel.findByIdAndUpdate(req.body.userId, { cartdata })
        await userModel.findByIdAndUpdate(req.user.id, { cartdata })
        res.send({ success: true, message: "added to Cart" })

    } catch (err) {
        console.log(err)
        res.send({ success: false, message: "Error" })
    }

}


//remove to cart

const removeFromCart = async (req, res) => {

    try {
        // let userdata = await userModel.findOne({ _id: req.body.userId })
        let userdata = await userModel.findById(req.user.id);
        let cartdata = await userdata.cartdata;
        if (cartdata[req.body.itemId] > 0) {
            cartdata[req.body.itemId] -= 1;

        }
        await userModel.findByIdAndUpdate(req.user.id, { cartdata })
        res.send({ success: true, message: "remove from Cart" })


    } catch (err) {
        console.log(err)
        res.send({ success: false, message: "Error" })
    }

}

//get cart

const getCart = async (req, res) => {

    try {
        // let userdata = await userModel.findOne({_id: req.body.userId })
        let userdata = await userModel.findById(req.user.id);
        let cartdata = await userdata.cartdata;
        res.send({success:true , data:cartdata})


    } catch (err) {
        console.log(err)
        res.send({success:false, message:"Error"})

    }
}


export { addToCart, removeFromCart, getCart }