import React, { useContext, useEffect, useState } from 'react'
import "./pages.css"
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/frontend_assets/assets'

export default function Myorder() {

    const [data, setData] = useState([])
    const { url, token } = useContext(StoreContext)

    const getOrder = async () => {
        const response = await axios.post(url + "/api/order/userorder", {}, { headers: { token } })
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        if (token) {
            getOrder()
        }
    }, [token])
    return (
        <div className='myorder'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => {
                    return (
                        <>
                            <div key={index} className="myorder-order">
                                <img src={assets.parcel_icon} alt="" />
                                <p>{order.items.map((item, index) => {
                                    if (index === order.items.length - 1) {
                                        return item.name + " X " + item.quantity
                                    }
                                    else{
                                         return item.name + " X " + item.quantity+" , "
                                    }
                                })}</p>
                                <p>${order.amount}.00</p>
                                <p>Items:{order.items.length}</p>
                                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                                <button onClick={getOrder}>Track Order</button>
                            </div>
                        </>
                    )

                })}
            </div>
        </div>
    )
}
