import React, { useEffect, useState } from 'react'
import "./Pages.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
export default function Order() {
  const [order, setOrder] = useState([])


  const allOrder = async () => {

    const response = await axios.get("http://localhost:4000/api/order/list")
    if (response.data.success) {
      setOrder(response.data.data)
      console.log(response.data.data)
    }
    else {
      toast.error("Error")
    }

  }

  const statushundler = async(e,orderId)=>{
    const response = await axios.post("http://localhost:4000/api/order/status",{orderId,status:e.target.value})
    if(response.data.success){
     await allOrder()
    }

  }

  useEffect(() => {
    allOrder()
  }, [])
  return (
    <div className='order-add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {order.map((order, index) => {
          return (
            <>
              <div className="order-item">
                <img src={assets.parcel_icon} alt="" />
                <div className='inner'>
                  <p className='order-item-food'>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " x " + item.quantity
                      }
                      else {
                        return item.name + " x " + item.quantity + " , "

                      }
                    })}
                  </p>
                  <p className='order-item-name'>{order.address.firstname + " " + order.address.lastname}</p>
                  <div className="order-address">
                    <p >{order.address.street + " , "}</p>
                    <p>{order.address.city + " , " + order.address.state + " , " + order.address.country + " , " + order.address.zipcode}</p>
                  </div>
                  <p className='order-phone'>{order.address.phone}</p>
                </div>
                <p>Items:{order.items.length}</p>
                <p>${order.amount}</p>
                <select  onChange={(e)=>{statushundler(e,order._id)}} value={order.status}>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>

              </div>
            </>

          )
        })}
      </div>
    </div>
  )
}
