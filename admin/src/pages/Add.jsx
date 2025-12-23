import React, { useEffect, useState } from 'react'
import "./Pages.css"
import { assets } from '../assets/assets'
import axios from "axios"
import {  toast } from 'react-toastify';
export default function Add() {
    let [image, setImage] = useState(false)
    let [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })
    let getvalue = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData(data => ({ ...data, [name]: value }))
    }
    let onsubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData()
        formdata.append("name", data.name)
        formdata.append("description", data.description)
        formdata.append("price", Number(data.price))
        formdata.append("category", data.category)
        formdata.append("image", image)
        await axios.post("http://localhost:4000/api/food/add", formdata).then((res) => {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad"
            })
            setImage(false)
            toast.success(res.data.message)
        }).catch((err)=>{toast.error(res.data.message)});
        
    }
    return (
        <div className='add'>
            <form onSubmit={onsubmit} className='flex-col'>
                <div className="add-img flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} required hidden type="file" name="image" id="image" />
                </div>
                <div className="add-product-name flex-col ">
                    <p>Product Name</p>
                    <input onChange={getvalue} value={data.name} type="text" placeholder='Type here' name='name' />

                </div>
                <div className="description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={getvalue} value={data.description} name="description" rows="6" placeholder='Write content here' required id=""></textarea>
                </div>
                <div className="price-category">
                    <div className="category flex-col">
                        <p>Product Category</p>
                        <select onChange={getvalue} name="category" id="">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cakes">Cakes</option>
                            <option value="Pure">Pure</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="price flex-col">
                        <p>product Price</p>
                        <input onChange={getvalue} value={data.price} type="number" name='price' placeholder='$20' />
                    </div>
                </div>
                <button type='submit' className='Add-btn'>ADD</button>

            </form>
        </div>

    )
}
