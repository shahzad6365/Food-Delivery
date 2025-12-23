import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Placeoreder() {

  let { totalcart, token, food_list, cartItem, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHundle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (e) => {
    e.preventDefault()
    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let iteminfo = item;
        iteminfo["quantity"] = cartItem[item._id]
        orderItems.push(iteminfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: totalcart() + 2
    }
    try {
      const response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });

      if (response.data.success) {
        // This session_url must be the string from session.url
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Payment redirect failed", error);
    }
  }

  const navigate = useNavigate()


  useEffect(()=>{
    if(!token){

      navigate("/cart")

    }else if(totalcart()===0){
      navigate("/cart")
    }
  },[token])




  return (
    <div>
      <form onSubmit={placeOrder} className='flex items-start justify-between gap-15 mt-[100px] mb-10'>
        <div className='w-1/2 '>
          <p className='text-[30px] font-semibold m-4'>Delivery Information</p>
          <div className='flex gap-4'>
            <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" name='firstname' onChange={onChangeHundle} value={data.firstname} placeholder='first_name' />
            <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" name='lastname' onChange={onChangeHundle} value={data.lastname} placeholder='last_name' />
          </div >
          <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="email" name='email' onChange={onChangeHundle} value={data.email} placeholder='Email' />
          <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" name='street' onChange={onChangeHundle} value={data.street} placeholder='street' />
          <div className='flex gap-4'>
            <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" name='city' onChange={onChangeHundle} value={data.city} placeholder='city' />
            <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" name='state' onChange={onChangeHundle} value={data.state} placeholder='state' />
          </div>
          <div className='flex gap-4'>
            <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" name='zipcode' onChange={onChangeHundle} value={data.zipcode} placeholder='Zip code' />
            <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" name='country' onChange={onChangeHundle} value={data.country} placeholder='Country' />
          </div>
          <input required className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" name='phone' onChange={onChangeHundle} value={data.phone} placeholder='Phone' />

        </div>
        <div className='w-1/2 '>
          <div className=' flex flex-col justify-between  gap-25  md outline-orange-600:flex-row  '>
            <div className=' flex flex-1 flex-col gap-3  '>
              <h2 className='font-bold text-2xl'>Cart Total </h2>
              <div className='flex justify-between ml-2 mr-2 '>
                <p>Subtotal</p>
                <p>${totalcart()}</p>
              </div>
              <hr className='m-2' />
              <div className='flex justify-between ml-2 mr-2 '>
                <p>Delivery Fee</p>
                <p>${totalcart() === 0 ? 0 : 2}</p>
              </div>
              <hr className='m-2' />
              <div className='flex justify-between ml-2 mr-2 '>
                <b >Total</b>
                <b >${totalcart() === 0 ? 0 : totalcart() + 2}</b>
              </div>
              <hr className='m-2' />
              <button type='submit' className='bg-orange-700 w-[200px] text-[12px] cursor-pointer rounded-md outline-orange-600 p-2'>PROCEED TO PAYMENT</button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
